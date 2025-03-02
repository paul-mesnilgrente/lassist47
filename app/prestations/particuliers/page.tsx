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
            Initiations informatiques
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
            <ul className="list-disc mb-4">
              <li>Initiation aux outils microsoft (word, excel, powerpoint)</li>
              <li>
                Initiation à l&apos;outil informatique (fonctions de base
                d&apos;un ordinateur)
              </li>
              <li>
                Initiation aux outils en ligne (bases d&apos;internet, mail)
              </li>
              <li>
                Initiation aux réseaux sociaux (Facebook, Linkedin, Instagram,
                Tik Tok)
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
