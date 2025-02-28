import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-11 p-4 bg-nblack text-gold border-t-4 border-gold">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="hover:underline" href="/conditions-generales-de-vente">
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
  );
}
