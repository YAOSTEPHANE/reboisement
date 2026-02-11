import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";
import { DonForm } from "./DonForm";

export const metadata: Metadata = {
  title: "Faire un don - Fondation YES",
  description: "Soutenez nos projets par un don en ligne ou par virement.",
};

const HERO_IMG = "/images/yesfondation-org/Untitled-design-7.jpg";

export default function FaireUnDonPage() {
  return (
    <>
      <PageHero
        title="Faire un don"
        subtitle="Votre don finance directement le reboisement, l'éducation à l'environnement et l'accompagnement des communautés. Chaque don compte."
        image={HERO_IMG}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <Link href="/nous-aider" className="page-breadcrumb__link">Nous aider</Link>
          <span className="page-breadcrumb__sep">/</span>
          <span aria-current="page">Faire un don</span>
        </nav>

        <p className="page-lead">
          Votre don permet à la Fondation YES de financer ses projets sur le terrain :
          reboisement, éducation, accompagnement des communautés et lutte contre la déforestation.
        </p>

        <section className="page-block" aria-labelledby="don-pourquoi">
          <h2 id="don-pourquoi" className="page-block__title">Pourquoi donner</h2>
          <p className="page-p">
            Les dons financent directement les campagnes de reboisement, les formations en milieu scolaire,
            l&apos;accompagnement des communautés et le suivi des plantations. Nous nous engageons à utiliser
            chaque don de manière transparente et à rendre compte de l&apos;impact de nos actions.
          </p>
          <ul className="don-impact" aria-hidden>
            <li className="don-impact__item">
              <div className="don-impact__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="don-impact__title">Reboisement</h3>
              <p className="don-impact__text">Financement direct des plantations et du suivi sur le terrain.</p>
            </li>
            <li className="don-impact__item">
              <div className="don-impact__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
              </div>
              <h3 className="don-impact__title">Éducation</h3>
              <p className="don-impact__text">Formations en milieu scolaire et sensibilisation à l&apos;environnement.</p>
            </li>
            <li className="don-impact__item">
              <div className="don-impact__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="don-impact__title">Communautés</h3>
              <p className="don-impact__text">Accompagnement des populations locales et création d&apos;emplois verts.</p>
            </li>
            <li className="don-impact__item">
              <div className="don-impact__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
              </div>
              <h3 className="don-impact__title">Transparence</h3>
              <p className="don-impact__text">Comptes rendus et reçus pour chaque don, conformément à la loi.</p>
            </li>
          </ul>
        </section>

        <section className="page-block" aria-labelledby="don-form-title">
          <h2 id="don-form-title" className="page-block__title">Faire votre don</h2>
          <p className="page-p">
            Choisissez le paiement en ligne par carte bancaire (sécurisé) ou indiquez votre intention de don pour être recontacté (virement, Mobile Money).
          </p>
          <DonForm />
        </section>

        <section className="page-block" aria-labelledby="don-comment">
          <h2 id="don-comment" className="page-block__title">Comment donner</h2>
          <ul className="don-methods">
            <li className="don-method">
              <div className="don-method__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <h3 className="don-method__title">Paiement en ligne</h3>
              <p className="don-method__text">Paiement sécurisé par carte bancaire directement sur cette page. Montant en FCFA, reçu par email.</p>
            </li>
            <li className="don-method">
              <div className="don-method__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
              </div>
              <h3 className="don-method__title">Virement bancaire</h3>
              <p className="don-method__text">Contactez-nous pour obtenir nos coordonnées bancaires et finaliser votre don.</p>
            </li>
            <li className="don-method">
              <div className="don-method__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
              </div>
              <h3 className="don-method__title">Mobile Money</h3>
              <p className="don-method__text">Disponible selon les opérateurs en Côte d&apos;Ivoire. Nous vous guiderons après votre intention.</p>
            </li>
            <li className="don-method">
              <div className="don-method__icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
              </div>
              <h3 className="don-method__title">Chèque</h3>
              <p className="don-method__text">À l&apos;ordre de la Fondation YES. Envoyez-le à notre siège ou lors d&apos;un événement.</p>
            </li>
          </ul>
        </section>

        <section className="page-block" aria-labelledby="don-transparence">
          <h2 id="don-transparence" className="page-block__title">Transparence</h2>
          <div className="don-trust">
            <p className="don-trust__title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              Réduction d&apos;impôt et reçu
            </p>
            <p className="page-p">
              Les dons à la Fondation YES peuvent ouvrir droit à une réduction d&apos;impôt selon la législation
              en vigueur. Nous vous enverrons un reçu pour vos démarches. Chaque don compte, quel qu&apos;en soit le montant.
            </p>
          </div>
        </section>

        <div className="page-cta-bar">
          <Link href="/contact" className="page-cta-bar__link">
            Nous contacter
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <Link href="/nous-aider/etre-benevole" className="page-cta-bar__link page-cta-bar__link--secondary">Devenir bénévole</Link>
          <Link href="/nous-aider/partenariat" className="page-cta-bar__link page-cta-bar__link--secondary">Partenariat</Link>
        </div>
      </main>

      <SectionDecouvrirAussi />
      <NewsletterSection />
      <SectionApresNewsletter />
    </>
  );
}
