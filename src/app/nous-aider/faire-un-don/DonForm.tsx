"use client";

import { useState } from "react";
import { submitDon, createCheckoutSession, type DonState } from "./actions";

const AMOUNTS = [
  { value: "5000", label: "5 000 FCFA" },
  { value: "10000", label: "10 000 FCFA" },
  { value: "25000", label: "25 000 FCFA" },
  { value: "50000", label: "50 000 FCFA" },
  { value: "other", label: "Autre montant" },
];

type DonMode = "online" | "contact";

export function DonForm() {
  const [state, setState] = useState<DonState>({});
  const [pending, setPending] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [mode, setMode] = useState<DonMode>("online");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [otherAmount, setOtherAmount] = useState<string>("");
  const [onlineEmail, setOnlineEmail] = useState<string>("");
  const [onlineName, setOnlineName] = useState<string>("");

  function getAmountFcfa(): number | null {
    if (selectedAmount === "other") {
      const n = Number(String(otherAmount).replace(/\s/g, "").replace(",", "."));
      return Number.isFinite(n) && n >= 0 ? Math.round(n) : null;
    }
    const n = Number(selectedAmount);
    return Number.isFinite(n) ? n : null;
  }

  async function handlePayOnline(e: React.FormEvent) {
    e.preventDefault();
    setCheckoutError(null);
    const amount = getAmountFcfa();
    if (amount == null || amount < 1000) {
      setCheckoutError("Veuillez choisir un montant d'au moins 1 000 FCFA.");
      return;
    }
    setPending(true);
    try {
      const result = await createCheckoutSession(amount, {
        email: onlineEmail.trim() || undefined,
        name: onlineName.trim() || undefined,
      });
      if (result.url) {
        window.location.href = result.url;
        return;
      }
      setCheckoutError(result.error || "Impossible de lancer le paiement.");
    } catch {
      setCheckoutError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setPending(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setState({});
    setCheckoutError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("amount") === "other") {
      formData.set("amount_custom", otherAmount);
    }
    try {
      const result = await submitDon(null, formData);
      setState(result);
      if (result.success) {
        form.reset();
        setSelectedAmount("");
        setOtherAmount("");
      }
    } catch {
      setState({ error: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setPending(false);
    }
  }

  if (state?.success) {
    return (
      <div className="don-form-card don-success-card" role="alert">
        <div className="don-success-card__icon" aria-hidden>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
        </div>
        <h3 className="don-success-card__title">Merci pour votre intention de don</h3>
        <p className="don-success-card__text">
          Un membre de l&apos;équipe vous contactera pour finaliser le virement ou le Mobile Money.
          Vous pouvez aussi nous joindre directement via la page <a href="/contact" className="page-link">Contact</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="don-form-card">
      <div className="don-mode-toggle" role="group" aria-label="Mode de don">
        <label className="don-mode-option">
          <input
            type="radio"
            name="donMode"
            checked={mode === "online"}
            onChange={() => setMode("online")}
          />
          <span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            Paiement en ligne
            <span className="don-online-badge">Carte bancaire</span>
          </span>
        </label>
        <label className="don-mode-option">
          <input
            type="radio"
            name="donMode"
            checked={mode === "contact"}
            onChange={() => setMode("contact")}
          />
          <span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Être recontacté
          </span>
        </label>
      </div>

      {mode === "online" ? (
        <form className="page-form page-form-don" onSubmit={handlePayOnline} aria-describedby={checkoutError ? "don-checkout-error" : undefined}>
          {checkoutError && (
            <p id="don-checkout-error" className="page-form-error" role="alert">
              {checkoutError}
            </p>
          )}
          <fieldset>
            <legend className="page-form-legend">Montant du don (FCFA)</legend>
            <div className="don-amounts">
              {AMOUNTS.map((a) => (
                <label key={a.value} className="don-amount-option">
                  <input
                    type="radio"
                    name="amount"
                    value={a.value}
                    checked={(selectedAmount ?? "") === a.value}
                    onChange={() => setSelectedAmount(a.value)}
                  />
                  <span>{a.label}</span>
                </label>
              ))}
            </div>
            <label className="page-form-other-amount">
              Autre montant (FCFA)
              <input
                type="text"
                placeholder="Ex. 15 000"
                value={otherAmount ?? ""}
                onChange={(e) => setOtherAmount(e.target.value)}
                disabled={selectedAmount !== "other"}
              />
            </label>
          </fieldset>
          <label>
            Email (pour le reçu de paiement)
            <input
              type="email"
              placeholder="votre@email.com"
              value={typeof onlineEmail === "string" ? onlineEmail : ""}
              onChange={(e) => setOnlineEmail(e.target.value ?? "")}
            />
          </label>
          <label>
            Nom (optionnel)
            <input
              type="text"
              placeholder="Votre nom"
              value={typeof onlineName === "string" ? onlineName : ""}
              onChange={(e) => setOnlineName(e.target.value ?? "")}
            />
          </label>
          <button type="submit" disabled={pending} className="don-pay-button">
            {pending ? (
              "Redirection vers le paiement…"
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
                Payer par carte bancaire
              </>
            )}
          </button>
        </form>
      ) : (
        <form className="page-form page-form-don" onSubmit={handleSubmit} aria-describedby={state?.error ? "don-error" : undefined}>
          {state?.error && (
            <p id="don-error" className="page-form-error" role="alert">
              {state.error}
            </p>
          )}
          <fieldset>
            <legend className="page-form-legend">Montant du don (FCFA)</legend>
            <div className="don-amounts">
              {AMOUNTS.map((a) => (
                <label key={a.value} className="don-amount-option">
                  <input
                    type="radio"
                    name="amount"
                    value={a.value}
                    required
                    checked={(selectedAmount ?? "") === a.value}
                    onChange={() => setSelectedAmount(a.value)}
                  />
                  <span>{a.label}</span>
                </label>
              ))}
            </div>
            <label className="page-form-other-amount">
              Autre montant (FCFA)
              <input
                type="text"
                name="amount_custom"
                placeholder="Ex. 15 000"
                value={otherAmount ?? ""}
                onChange={(e) => setOtherAmount(e.target.value)}
                disabled={selectedAmount !== "other"}
              />
            </label>
          </fieldset>
          <label>
            Nom (optionnel)
            <input type="text" name="name" placeholder="Votre nom" />
          </label>
          <label>
            Email (optionnel, pour le reçu)
            <input type="email" name="email" placeholder="votre@email.com" />
          </label>
          <label>
            Message (optionnel)
            <textarea name="message" placeholder="Dédicace, projet ciblé..." rows={3} />
          </label>
          <button type="submit" disabled={pending} className="page-form-submit">
            {pending ? "Envoi…" : "Confirmer mon intention de don"}
          </button>
        </form>
      )}
    </div>
  );
}
