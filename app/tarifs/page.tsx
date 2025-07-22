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
              <li>
                Tarif à l&apos;heure : 30€ en télétravail ; 32€ sur site (max
                30km)
              </li>
              <li>
                Tarif au forfait (au mois) : 2h/semaine 250€ ; 3h/semaine 360€ ;
                4h/semaine 470€
              </li>
            </ul>
            <p>Devis selon vos besoins à la demande.</p>
          </TabPanel>
          <TabPanel>
            <ul className="list-disc mb-4">
              <li>
                Tarif à l&apos;heure : 25€ l&apos;heure
                <br /> Possibilité de paiement en CESU offrant droit à 50€ de
                crédit d&apos;impôt
              </li>
              <li>Pour l&apos;évenementiel : 30€ l&apos;heure</li>
            </ul>
            <p>Devis selon vos besoins à la demande.</p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
