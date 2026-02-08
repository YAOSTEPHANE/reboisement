"use server";

import { saveContact } from "@/lib/submissions";

export type ContactState = { success?: boolean; error?: string };

export async function submitContact(_prev: ContactState | null, formData: FormData): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { error: "Veuillez remplir les champs obligatoires (nom, email, message)." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Adresse email invalide." };
  }

  try {
    await saveContact({ name, email, phone, message });
    return { success: true };
  } catch (err) {
    console.error("submitContact:", err);
    return { error: "Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone." };
  }
}
