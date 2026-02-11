"use client";

import { useState } from "react";
import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter";

const BENEFITS = [
  "Suivi et retours d'information",
  "Rapports d'impact en avant-première",
  "Bonnes pratiques environnement",
  "Invitations événements et webinaires",
];

export function NewsletterSection() {
  const [state, setState] = useState<NewsletterState>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setState({});
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const result = await subscribeNewsletter(null, formData);
      setState(result);
      if (result.success) form.reset();
    } catch {
      setState({ error: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="newsletter-pro" aria-label="Newsletter">
      <div className="newsletter-pro__inner">
        <div className="newsletter-pro__card">
          <div className="newsletter-pro__content">
            <div className="newsletter-pro__icon" aria-hidden>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h2 className="newsletter-pro__title">Restez informé</h2>
            <p className="newsletter-pro__lead">
              Actualités, rapports d&apos;impact et actions : recevez-les par email.
            </p>
            <ul className="newsletter-pro__benefits" role="list">
              {BENEFITS.map((text, i) => (
                <li key={i} className="newsletter-pro__benefit">
                  <span className="newsletter-pro__benefit-icon" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="newsletter-pro__form-wrap">
            {state.success ? (
              <div className="newsletter-pro__success" role="status" aria-live="polite">
                <span className="newsletter-pro__success-icon" aria-hidden>
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <h3 className="newsletter-pro__success-title">Inscription enregistrée</h3>
                <p className="newsletter-pro__success-text">
                  {state.already
                    ? "Vous êtes déjà inscrit à notre newsletter."
                    : "Merci ! Vous recevrez désormais notre newsletter. Pensez à vérifier vos spams si vous ne voyez pas nos emails."}
                </p>
              </div>
            ) : (
              <form
                className="newsletter-pro__form"
                onSubmit={handleSubmit}
                aria-labelledby="newsletter-heading"
                aria-describedby={state?.error ? "newsletter-error" : undefined}
                noValidate
              >
                <h3 id="newsletter-heading" className="newsletter-pro__form-title">Abonnez-vous</h3>
                {state?.error && (
                  <p id="newsletter-error" className="newsletter-pro__error" role="alert">
                    {state.error}
                  </p>
                )}
                <div className="newsletter-pro__fields">
                  <label htmlFor="newsletter-pro-firstname" className="newsletter-pro__label">
                    Prénom <span className="newsletter-pro__optional">(optionnel)</span>
                  </label>
                  <input
                    id="newsletter-pro-firstname"
                    type="text"
                    name="firstName"
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                    className="newsletter-pro__input"
                    disabled={pending}
                  />
                  <label htmlFor="newsletter-pro-email" className="newsletter-pro__label">
                    Adresse email <span className="newsletter-pro__required" aria-hidden>*</span>
                  </label>
                  <input
                    id="newsletter-pro-email"
                    type="email"
                    name="email"
                    placeholder="vous@exemple.com"
                    required
                    autoComplete="email"
                    className="newsletter-pro__input"
                    disabled={pending}
                  />
                </div>
                <label className="newsletter-pro__checkbox-label">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="newsletter-pro__checkbox"
                    disabled={pending}
                  />
                  <span className="newsletter-pro__checkbox-text">
                    J&apos;accepte de recevoir la newsletter de la Fondation YES et je peux me désinscrire à tout moment.
                  </span>
                </label>
                <button
                  type="submit"
                  className="newsletter-pro__submit"
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      <span className="newsletter-pro__spinner" aria-hidden />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      S&apos;inscrire
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
