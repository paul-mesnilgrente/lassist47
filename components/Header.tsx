import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-nblack border-b-4 border-gold mb-11">
      <div className="container mx-auto flex justify-between items-end">
        <Link href="/">
          <Image
            src="/images/logos/full_logo_gold.png"
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
              <a
                href="https://www.linkedin.com/in/lassist47/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/images/logos/logo_linkedin.png"
                  alt="LinkedIn"
                  width={33}
                  height={33}
                />
              </a>
            </li>
            <li className="bg-gold text-nblack p-1">
              <a
                href="https://www.facebook.com/people/Lassist47/61572424965502/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/images/logos/logo_facebook.png"
                  alt="Facebook"
                  width={33}
                  height={33}
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}
