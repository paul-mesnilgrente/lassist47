import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const metadata = {
  title: "Tarifs pour les particuliers",
};

export default function Particuliers() {
  return (
    <div className="w-3/4 mx-auto">
      <TabGroup>
        <TabList
          aria-label="Tab des tarifs"
          className="flex space-x-4 uppercase"
        >
          <Tab className="p-2 min-w-40 text-center bg-gold text-nblack hover:underline">
            Tarifs professionnels
          </Tab>
          <Tab className="p-2 min-w-40 text-center bg-gold text-nblack hover:underline">
            Tarifs particuliers
          </Tab>
        </TabList>
        <TabPanels className="p-11 bg-nblack border-4 border-gold">
          <TabPanel>
            <ul className="list-disc mb-4">
              <li>Tarif à l&apos;heure : 30€</li>
              <li>
                Forfait mensuel (tarif préférentiels) : 2h/semaine 240€ ;
                3h/semaine 350€ ; 4h/semaine 460€
              </li>
              <li>
                Frais de déplacement : 20km aller-retour offerts par déplacement
                puis 0.60€/km supplémentaire
              </li>
            </ul>
            <p className="italic">Devis gratuit à la demande.</p>
          </TabPanel>
          <TabPanel>
            <ul className="list-disc mb-4">
              <li>Tarif à l&apos;heure : 25€ l&apos;heure</li>
              <li>Atelier d&apos;initation (1h) : 60€</li>
              <li>
                Frais de déplacement : 20km aller-retour offerts par déplacement
                puis 0.60€/km supplémentaire
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
