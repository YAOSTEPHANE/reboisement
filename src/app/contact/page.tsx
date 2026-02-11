import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionDecouvrirAussi } from "@/components/SectionDecouvrirAussi";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SectionApresNewsletter } from "@/components/SectionApresNewsletter";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez la Fondation YES par email, téléphone ou formulaire.",
};

const HERO_IMAGE = "/images/yesfondation-org/H5C4207-scaled.jpg";
const SIDE_IMAGE = "/images/yesfondation-org/H5C4207-scaled.jpg";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Une question, un don, devenir bénévole ou discuter d'un partenariat ? Écrivez-nous ou appelez-nous."
        image={HERO_IMAGE}
      />
      <main className="page-content page-content--presentation">
        <nav className="page-breadcrumb" aria-label="Fil d'Ariane">
          <span aria-current="page">Contact</span>
        </nav>

        <p className="page-lead">
          Réponse sous 48 à 72 h ouvrées. Pour un don ou un partenariat, précisez-le dans votre message.
        </p>

        <section className="page-block" aria-labelledby="contact-joindre">
          <h2 id="contact-joindre" className="page-block__title">Nous joindre</h2>
          <div className="page-split">
            <div className="page-split__media">
              <Image
                src={SIDE_IMAGE}
                alt="Équipe et nature"
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <ul className="page-contact-list">
                <li className="page-contact-item">
                  <strong className="page-contact-label">Email</strong>
                  <a href="mailto:contact@eauxetforets.gouv.ci" className="page-link">
                    contact@eauxetforets.gouv.ci
                  </a>
                </li>
                <li className="page-contact-item">
                  <strong className="page-contact-label">Téléphone</strong>
                  <a href="tel:+2252720239530" className="page-link">
                    (+225) 27 20 23 95 30
                  </a>
                </li>
                <li className="page-contact-item">
                  <strong className="page-contact-label">Adresse</strong>
                  <span className="page-contact-text">Fondation YES, Abidjan, Côte d&apos;Ivoire</span>
                </li>
              </ul>
              <p className="page-p page-p--mb0">Réponse sous 48 à 72 h ouvrées.</p>
            </div>
          </div>
        </section>

        <section className="page-block" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title" className="page-block__title">Envoyer un message</h2>
          <ContactForm />
        </section>

        <div className="page-cta-bar">
          <Link href="/nous-aider/faire-un-don" className="page-cta-bar__link">
            Faire un don
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
