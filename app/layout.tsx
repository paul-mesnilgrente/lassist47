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
        <header className="bg-nblack border-b-4 border-gold">
          <div className="container mx-auto flex justify-between items-end">
            <Image
              src="/lassist47/images/logos/full_logo_gold.png"
              alt="Logo"
              className="m-4"
              width={150}
              height={200}
            />
            <nav aria-label="Main navigation">
              <ul className="flex space-x-4">
                <li className="bg-gold text-nblack p-2 me-2 min-w-40 text-center">
                  <Link
                    className="block w-full h-full hover:underline"
                    href="/accueil"
                  >
                    Accueil
                  </Link>
                </li>
                <li className="bg-gold text-nblack p-2 me-2 min-w-40 text-center">
                  <Link
                    className="block w-full h-full hover:underline"
                    href="/prestations"
                  >
                    Prestations
                  </Link>
                </li>
                <li className="bg-gold text-nblack p-2 me-2 min-w-40 text-center">
                  <Link
                    className="block w-full h-full hover:underline"
                    href="/tarifs"
                  >
                    Tarifs
                  </Link>
                </li>
                <li className="bg-gold text-nblack p-2 me-2 min-w-40 text-center">
                  <Link
                    className="block w-full h-full hover:underline"
                    href="/contact"
                  >
                    Contactez-moi
                  </Link>
                </li>
              </ul>
            </nav>
            <section arial-label="Social media" aria-label="Social media links">
              <ul className="flex space-x-4">
                <li className="bg-gold text-nblack p-1 me-2">
                  <Link href="/mentions-legales">
                    <Image
                      src="/lassist47/images/logos/logo_linkedin.png"
                      alt="LinkedIn"
                      width={33}
                      height={33}
                    />
                  </Link>
                </li>
                <li className="bg-gold text-nblack p-1 me-2">
                  <Link href="/politique-de-confidentialite">
                    <Image
                      src="/lassist47/images/logos/logo_facebook.png"
                      alt="Facebook"
                      width={33}
                      height={33}
                    />
                  </Link>
                </li>
              </ul>
            </section>
          </div>
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
