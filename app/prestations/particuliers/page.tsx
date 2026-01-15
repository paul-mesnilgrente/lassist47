import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export const metadata = {
  title: "Prestations pour les particuliers",
};

export default function Particuliers() {
  return (
    <div className="w-3/4 mx-auto">
      <TabGroup>
        <TabList
          aria-label="Tab des prestations"
          className="flex space-x-4 uppercase"
        >
          <Tab className="p-2 min-w-40 text-center bg-gold text-nblack hover:underline">
            Assistance administrative
          </Tab>
          <Tab className="p-2 min-w-40 text-center bg-gold text-nblack hover:underline">
            Atelier d'initiation
          </Tab>
        </TabList>
        <TabPanels className="p-11 bg-nblack border-4 border-gold">
          <TabPanel>
            <ul className="list-disc mb-4">
              <li>
                Rédaction, relecture et mise en page de document et courrier
              </li>
              <li>
                Formalités administratives (CNI, passeport, CAF, CPAM, MSA,…)
              </li>
              <li>
                Déclarations diverses (France Travail, PAJEmploi, impôts,…)
              </li>
              <li>Gestion de budget</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <p className="pb-2">
              Ateliers d&apos;initiation aux outils numériques du quotidien à
              destination des particuliers, visant l&apos;autonomie personnelle
              (gestion des documents, budget personnel, communication en ligne,
              usage des réseaux sociaux à titre privé).
            </p>
            <p className="pb-2 italic">
              Ces ateliers n&apos;ont pas pour objectif le développement de
              compétences professionnelles. Je ne suis pas formatrice.
            </p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
