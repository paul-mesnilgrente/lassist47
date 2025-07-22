import Link from "next/link";

export default function TarifsTabs() {
  return (
    <nav role="navigation" aria-label="Navigation des tarifs">
      <ul className="flex space-x-4 uppercase">
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link className="block w-full h-full hover:underline" href="/tarifs">
            Tarifs Professionnels
          </Link>
        </li>
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link className="block w-full h-full hover:underline" href="/tarifs">
            Tarifs Particuliers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
