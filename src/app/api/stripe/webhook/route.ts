import { NextResponse } from "next/server";
import Stripe from "stripe";
import { saveDonation } from "@/lib/submissions";

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: Request) {
  if (!stripe || !webhookSecret) {
    console.warn("Stripe webhook: STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET missing");
    return NextResponse.json({ error: "Webhook non configuré" }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Signature manquante" }, { status: 400 });
  }

  let body: string;
  try {
    body = await request.text();
  } catch {
    return NextResponse.json({ error: "Body invalide" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature invalide";
    console.error("Stripe webhook signature error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    if (session.metadata?.type === "don" && session.payment_status === "paid") {
      const amountFcfa = session.amount_total ?? 0;
      try {
        await saveDonation({
          stripeSessionId: session.id,
          amountFcfa,
          email: session.customer_email ?? session.customer_details?.email ?? undefined,
          donorName: session.metadata?.donor_name || undefined,
        });
      } catch (err) {
        console.error("saveDonation error:", err);
        return NextResponse.json({ error: "Erreur enregistrement" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
