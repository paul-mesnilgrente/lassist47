import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex space-x-4 uppercase">
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link className="block w-full h-full hover:underline" href="/">
            Accueil
          </Link>
        </li>
        <Menu
          as="li"
          className="relative bg-gold text-nblack p-2 min-w-40 text-center"
        >
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 uppercase">
              Prestations
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-5 w-full origin-top-right ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div>
              <MenuItem>
                <Link
                  className="block mb-2 p-2 bg-gold data-focus:bg-gold data-focus:text-gray-900 data-focus:outline-hidden"
                  href="/prestations/professionnels"
                >
                  Professionels
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className="block p-2 bg-gold data-focus:bg-gold data-focus:text-gray-900 data-focus:outline-hidden"
                  href="/prestations/particuliers"
                >
                  Particuliers
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link className="block w-full h-full hover:underline" href="/tarifs">
            Tarifs
          </Link>
        </li>
        <li className="bg-gold text-nblack p-2 min-w-40 text-center">
          <Link className="block w-full h-full hover:underline" href="/contact">
            Contactez-moi
          </Link>
        </li>
      </ul>
    </nav>
  );
}
