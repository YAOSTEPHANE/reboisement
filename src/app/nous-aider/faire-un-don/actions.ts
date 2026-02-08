"use server";

import Stripe from "stripe";
import { saveDonIntention } from "@/lib/submissions";

export type DonState = { success?: boolean; error?: string };

export type CheckoutState = { url?: string; error?: string };

/** Crée une session Stripe Checkout pour un don en ligne (montant en FCFA). */
export async function createCheckoutSession(
  amountFcfa: number,
  options?: { email?: string; name?: string }
): Promise<CheckoutState> {
  const secret = process.env.STRIPE_SECRET_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  if (!secret) {
    return { error: "Paiement en ligne non configuré. Utilisez le formulaire pour être recontacté." };
  }

  if (amountFcfa < 1000) {
    return { error: "Le montant minimum pour un paiement en ligne est de 1 000 FCFA." };
  }

  try {
    const stripe = new Stripe(secret);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "xof",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "xof",
            unit_amount: Math.round(amountFcfa),
            product_data: {
              name: "Don - Fondation YES",
              description: "Reboisement, éducation à l'environnement et accompagnement des communautés.",
              images: process.env.NEXT_PUBLIC_APP_URL
                ? [`${baseUrl}/icon.svg`]
                : undefined,
            },
          },
        },
      ],
      success_url: `${baseUrl}/nous-aider/faire-un-don/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/nous-aider/faire-un-don?annule=1`,
      customer_email: options?.email || undefined,
      metadata: {
        type: "don",
        donor_name: options?.name || "",
      },
    });

    if (session.url) return { url: session.url };
    return { error: "Impossible de créer la session de paiement." };
  } catch (err) {
    console.error("Stripe Checkout error:", err);
    return { error: "Une erreur est survenue. Veuillez réessayer ou utiliser le formulaire de contact." };
  }
}

export async function submitDon(_prev: DonState | null, formData: FormData): Promise<DonState> {
  const amount = (formData.get("amount") as string)?.trim();
  const amountCustom = (formData.get("amount_custom") as string)?.trim();
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim() || "";

  const finalAmount = amount === "other" ? amountCustom : amount;
  if (!finalAmount || (amount === "other" && !amountCustom.trim())) {
    return { error: "Veuillez indiquer un montant." };
  }

  const num = finalAmount.replace(/\s/g, "").replace(",", ".");
  if (!/^\d+(\.\d+)?$/.test(num) || Number(num) <= 0) {
    return { error: "Montant invalide." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Adresse email invalide." };
  }

  try {
    await saveDonIntention({
      amount,
      amountCustom: amount === "other" ? amountCustom : undefined,
      name: name || "",
      email: email || "",
      message,
    });
    return { success: true };
  } catch (err) {
    console.error("submitDon:", err);
    return { error: "Une erreur est survenue. Veuillez réessayer." };
  }
}
