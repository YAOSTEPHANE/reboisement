"use client";

import { useState } from "react";
import { submitContact, type ContactState } from "./actions";

export function ContactForm() {
  const [state, setState] = useState<ContactState>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setState({});
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const result = await submitContact(null, formData);
      setState(result);
      if (result.success) form.reset();
    } catch {
      setState({ error: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setPending(false);
    }
  }

  if (state?.success) {
    return (
      <div className="page-form-success" role="alert">
        <p className="page-p" style={{ color: "#1a4d3a", fontWeight: 600 }}>
          Message envoyé. Nous vous recontacterons rapidement.
        </p>
      </div>
    );
  }

  return (
    <form className="page-form" onSubmit={handleSubmit} aria-describedby={state?.error ? "contact-error" : undefined}>
      {state?.error && (
        <p id="contact-error" className="page-form-error" role="alert">
          {state.error}
        </p>
      )}
      <label>
        Nom et prénom <span aria-hidden>*</span>
        <input type="text" name="name" required placeholder="Votre nom" />
      </label>
      <label>
        Email <span aria-hidden>*</span>
        <input type="email" name="email" required placeholder="votre@email.com" />
      </label>
      <label>
        Téléphone
        <input type="tel" name="phone" placeholder="+225 ..." />
      </label>
      <label>
        Message <span aria-hidden>*</span>
        <textarea name="message" required placeholder="Votre message..." />
      </label>
      <button type="submit" disabled={pending} className="page-form-submit">
        {pending ? "Envoi en cours…" : "Envoyer"}
      </button>
    </form>
  );
}
