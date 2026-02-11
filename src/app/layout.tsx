import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { HeaderScrollEffect } from "@/components/HeaderScrollEffect";
import { ScrollProvider } from "@/components/ScrollContext";
import { BarreVerte } from "@/components/BarreVerte";
import { Footer } from "@/components/Footer";
import { TextRevealRoot } from "@/components/TextRevealRoot";
import { LayoutClientParts } from "@/components/LayoutClientParts";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const NAV_LINKS = [
  {
    href: "/presentation",
    label: "Présentation",
    children: [
      { href: "/presentation/qui-sommes-nous", label: "Qui sommes-nous" },
      { href: "/presentation/projets", label: "Projets" },
      { href: "/presentation/nos-actions", label: "Nos actions" },
      { href: "/presentation/equipe", label: "Équipe" },
    ],
  },
  {
    href: "/nous-aider",
    label: "Nous aider",
    children: [
      { href: "/nous-aider/faire-un-don", label: "Faire un don" },
      { href: "/nous-aider/etre-benevole", label: "Être bénévole" },
      { href: "/nous-aider/partenariat", label: "Partenariat" },
    ],
  },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://fondation-yes.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fondation YES",
    template: "%s | Fondation YES",
  },
  description: "Fondation YES : préservation des forêts, reboisement et accompagnement des communautés. Dons, bénévolat, partenariats.",
  keywords: ["Fondation YES", "reboisement", "forêts", "environnement", "biodiversité", "Côte d'Ivoire"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Fondation YES",
    url: siteUrl,
    images: [{ url: "/images/yesfondation-org/Design-sans-titre-18.jpg", width: 1200, height: 630, alt: "Fondation YES" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fondation YES",
    description: "Préservation des forêts, reboisement et accompagnement des communautés.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a4d3a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={plusJakarta.variable}>
      <body className="antialiased min-h-screen font-sans" style={{ margin: 0, background: "var(--color-bg, #fafaf9)" }}>
        <LayoutClientParts />
        <a href="#contenu-principal" className="skip-link">
          Aller au contenu
        </a>
        <ScrollProvider>
        <HeaderScrollEffect>
        <header
          className="header-animate"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            padding: '0.75rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '0.75rem',
            background: '#fafaf9',
            zIndex: 50,
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <BarreVerte>
          <span style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:contact@eauxetforets.gouv.ci" style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 500 }}>
                contact@eauxetforets.gouv.ci
              </a>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+2252720239530" style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 500 }}>
                (+225) 27 20 23 95 30
              </a>
            </span>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#1877F2', display: 'flex' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#E4405F', display: 'flex' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0A66C2', display: 'flex' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ color: '#000000', display: 'flex' }}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </span>
            </BarreVerte>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="logo-rainbow">
              <div className="logo-rainbow__inner">
                <Link href="/">
                  <Image
                    src="/logo-fondation-yes.png"
                    alt="FONDATION YES - Créons un monde meilleur"
                    width={72}
                    height={72}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    priority
                  />
                </Link>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>
              <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                {NAV_LINKS.map((item) =>
                  "children" in item && item.children ? (
                    <div key={item.href} className="nav-dropdown-trigger" style={{ position: 'relative' }}>
                      <Link
                        href={item.href}
                        style={{ color: '#1c1917', fontSize: '0.9rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                      >
                        {item.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </Link>
                      <div className="nav-dropdown">
                        {item.children.map(({ href, label }) => (
                          <Link key={href} href={href}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{ color: '#1c1917', fontSize: '0.9rem', fontWeight: 500 }}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  href="/recherche"
                  className="header-btn-recherche"
                  aria-label="Recherche"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <span>Recherche</span>
                </Link>
              </nav>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', minWidth: 72, flexShrink: 0 }}>
              <Link
                href="/nous-aider/faire-un-don"
                className="header-btn-don"
              >
                Don
              </Link>
            </div>
          </div>
        </header>
        </HeaderScrollEffect>
        </ScrollProvider>
        <TextRevealRoot>
          <div id="contenu-principal" className="main-content-wrap" style={{ paddingTop: '10rem' }}>
            {children}
          </div>
          <Footer />
        </TextRevealRoot>
      </body>
    </html>
  );
}
