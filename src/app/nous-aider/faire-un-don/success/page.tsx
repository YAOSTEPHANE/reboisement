import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";

export const metadata: Metadata = {
  title: "Don reçu - Fondation YES",
  description: "Merci pour votre don. Votre paiement a bien été enregistré.",
};

export default function DonSuccessPage() {
  return (
    <>
      <PageHero
        title="Merci pour votre don"
        subtitle="Votre paiement a bien été enregistré. Vous recevrez un reçu par email. Votre don contribue directement au reboisement et à l'accompagnement des communautés."
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/nous-aider" className="page-breadcrumb__link">Nous aider</Link>
          <span className="page-breadcrumb__sep">/</span>
          <Link href="/nous-aider/faire-un-don" className="page-breadcrumb__link">Faire un don</Link>
          <span className="page-breadcrumb__sep">/</span>
          <span aria-current="page">Confirmation</span>
        </nav>

        <div className="don-form-card don-success-card don-success-page-card">
          <div className="don-success-card__icon" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 className="don-success-card__title">Paiement réussi</h1>
          <p className="don-success-card__text">
            Un reçu vous a été envoyé par email. Pour toute question, contactez-nous via la page{" "}
            <Link href="/contact" className="page-link">Contact</Link>.
          </p>
          <p className="page-p">
            <Link href="/nous-aider/faire-un-don" className="page-cta-bar__link">
              Faire un autre don
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </p>
        </div>

        <div className="page-cta-bar">
          <Link href="/" className="page-cta-bar__link">Retour à l&apos;accueil</Link>
          <Link href="/contact" className="page-cta-bar__link page-cta-bar__link--secondary">Nous contacter</Link>
        </div>
      </main>

      <SectionDecouvrirAussi />
      <NewsletterSection />
    </>
  );
}
