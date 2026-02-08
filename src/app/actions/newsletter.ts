"use server";

import { saveNewsletter } from "@/lib/submissions";

export type NewsletterState = { success?: boolean; already?: boolean; error?: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeNewsletter(
  _prev: NewsletterState | null,
  formData: FormData
): Promise<NewsletterState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const firstName = (formData.get("firstName") as string)?.trim() || "";
  const consent = formData.get("consent") === "on";

  if (!email) {
    return { error: "Veuillez indiquer votre adresse email." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Adresse email invalide." };
  }

  if (!consent) {
    return { error: "Veuillez accepter de recevoir notre newsletter." };
  }

  try {
    const status = await saveNewsletter({ email, firstName, consent });
    if (status === "already") {
      return { success: true, already: true };
    }
    return { success: true };
  } catch (err) {
    console.error("subscribeNewsletter:", err);
    return { error: "Une erreur est survenue. Veuillez réessayer plus tard." };
  }
}
