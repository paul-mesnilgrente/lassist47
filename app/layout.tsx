import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const texGyreTermes = localFont({
  src: [
    {
      path: "../fonts/tex-gyre-termes/texgyretermes-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/tex-gyre-termes/texgyretermes-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/tex-gyre-termes/texgyretermes-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/tex-gyre-termes/texgyretermes-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "L'assist47",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={texGyreTermes.className}>
        <header>
          <Image
            src="/lassist47/images/logos/full_logo_gold.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <nav aria-label="Main navigation">
            <ul>
              <li>
                <Link href="/accueil">Accueil</Link>
              </li>
              <li>
                <Link href="/prestations">Prestations</Link>
              </li>
              <li>
                <Link href="/tarifs">Tarifs</Link>
              </li>
              <li>
                <Link href="/contact">Contactez-moi</Link>
              </li>
            </ul>
          </nav>
          <section arial-label="Social media">
            <ul>
              <li>
                <Link href="/mentions-legales">
                  <Image
                    src="/lassist47/images/logos/logo_linkedin.png"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite">
                  <Image
                    src="/lassist47/images/logos/logo_facebook.png"
                    alt="Facebook"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
            </ul>
          </section>
        </header>
        <main>{children}</main>
        <footer>
          <nav aria-label="Secondary navigation">
            <ul>
              <li>
                <Link href="/conditions-generals-de-ventes">CGV</Link>
              </li>
              <li>
                <Link href="/mentions-legales">Mentions Légales</Link>
              </li>
              <li>
                <Link href="/">
                  <Image
                    src="/lassist47/images/logos/logo_yellow.png"
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
              <li>&copy; {new Date().getFullYear()} / L&apos;assist&apos;47</li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
