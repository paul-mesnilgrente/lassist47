import Link from "next/link";

export default function PrestationsProfessionnelsTabs() {
  return (
    <nav role="navigation" aria-label="Navigation des tarifs">
      <ul className="flex space-x-4 uppercase">
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link
            className="block w-full h-full hover:underline"
            href="/prestations/professionnels"
          >
            Assistance administrative
          </Link>
        </li>
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link
            className="block w-full h-full hover:underline"
            href="/prestations/professionnels"
          >
            Assistance commerciale
          </Link>
        </li>
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link
            className="block w-full h-full hover:underline"
            href="/prestations/professionnels"
          >
            Assistance pré-comptable
          </Link>
        </li>
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link
            className="block w-full h-full hover:underline"
            href="/prestations/professionnels"
          >
            Assistance ressources humaines
          </Link>
        </li>
      </ul>
    </nav>
  );
}
