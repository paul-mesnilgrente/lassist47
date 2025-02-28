import Nav from "@/components/Nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const cambria = localFont({
  src: [
    { path: "../fonts/cambria/cambria_for_windows.woff2" },
    { path: "../fonts/cambria/cambria_for_windows.woff" },
    { path: "../fonts/cambria/cambria_for_windows.ttf" },
  ],
  variable: "--font-cambria",
});

const bahnschrift = localFont({
  src: [
    { path: "../fonts/bahnschrift/bahnschrift.woff2" },
    { path: "../fonts/bahnschrift/bahnschrift.woff" },
    { path: "../fonts/bahnschrift/bahnschrift.ttf" },
  ],
  variable: "--font-bahnschrift",
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
      <body
        className={`${cambria.variable} ${bahnschrift.variable} min-h-screen flex flex-col`}
      >
        <header className="bg-nblack border-b-4 border-gold mb-11">
          <div className="container mx-auto flex justify-between items-end">
            <Link href="/">
              <Image
                src="/lassist47/images/logos/full_logo_gold.png"
                alt="Logo"
                className="m-4"
                width={150}
                height={200}
              />
            </Link>
            <Nav />
            <section arial-label="Social media" aria-label="Social media links">
              <ul className="flex space-x-2">
                <li className="bg-gold text-nblack p-1">
                  <Link href="/mentions-legales">
                    <Image
                      src="/lassist47/images/logos/logo_linkedin.png"
                      alt="LinkedIn"
                      width={33}
                      height={33}
                    />
                  </Link>
                </li>
                <li className="bg-gold text-nblack p-1">
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

        <main className="flex flex-col justify-center flex-grow">
          <div className="w-3/4 mx-auto p-11 bg-nblack border-4 border-gold">
            {children}
          </div>
        </main>

        <footer className="mt-11 p-4 bg-nblack text-gold border-t-4 border-gold">
          <div className="container mx-auto flex items-center justify-between">
            <Link
              className="hover:underline"
              href="/conditions-generales-de-vente"
            >
              CGV
            </Link>
            <Link className="hover:underline" href="/mentions-legales">
              Mentions Légales
            </Link>
            <Link href="/">
              <Image
                src="/lassist47/images/logos/logo_yellow.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
            <div>&copy; {new Date().getFullYear()} / L&apos;assist&apos;47</div>
            <section arial-label="Social media" aria-label="Social media links">
              <ul className="flex space-x-2">
                <li className="bg-gold text-nblack p-1">
                  <Link href="/mentions-legales">
                    <Image
                      src="/lassist47/images/logos/logo_linkedin.png"
                      alt="LinkedIn"
                      width={33}
                      height={33}
                    />
                  </Link>
                </li>
                <li className="bg-gold text-nblack p-1">
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
        </footer>
      </body>
    </html>
  );
}
