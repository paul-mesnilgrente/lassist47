"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Professionnels() {
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
            Assistance commerciale
          </Tab>
          <Tab className="p-2 min-w-40 text-center bg-gold text-nblack hover:underline">
            Assistance pré-comptable
          </Tab>
          <Tab className="p-2 min-w-40 text-center bg-gold text-nblack hover:underline">
            Assistance ressources humaines
          </Tab>
        </TabList>

        <TabPanels className="p-11 bg-nblack border-4 border-gold">
          <TabPanel>
            <ul className="list-disc">
              <li>Gestion de planning et agenda</li>
              <li>Gestion courrier / mails (traitement, rédaction…)</li>
              <li>
                Création et mise à jour de document type, tableaux de bord,
                suivis…
              </li>
              <li>
                Rédaction, relecture, mise en page, de vos courriers, rapports,
                comptes rendus, procès-verbaux…
              </li>
              <li>Classement, tri et archivage</li>
              <li>Préparation d&apos;un déplacement professionnel</li>
              <li>Gestion statutaire (assemblée générale, formalité INPI,…)</li>
              <li>Prospection de partenariats CSE</li>
              <li>Recherche documentaire et règlementaire</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="list-disc">
              <li>Élaboration de devis</li>
              <li>Suivi et relance</li>
              <li>Traitement des réclamations</li>
              <li>Création et suivi d&apos;une base de données clients</li>
              <li>
                Organisation d&apos;évènement (séminaire, assemblée générale,
                journée portes ouvertes,…)
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="list-disc">
              <li>
                Préparation des éléments à remettre à votre cabinet comptable
              </li>
              <li>Suivi des encaissements et relance des impayés</li>
              <li>Contrôle et suivi des factures fournisseurs et clients</li>
              <li>
                Suivi de la trésorerie
                <br />
                Je n&apos;ai pas le droit d&apos;exercer la comptabilité, ceci
                est un domaine réservé aux experts comptables selon l&apos;
                <a
                  href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033678961"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline hover:text-gold"
                >
                  ordonnance du 19 septembre 1945
                </a>
                . Je n&apos;interviens donc jamais sur logiciel comptable, tant
                dans mon intérêt que dans le vôtre.
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="list-disc">
              <li>Création et mise en ligne d&apos;offre d&apos;emploi</li>
              <li>Pré-sélection de CV</li>
              <li>Entretien préalable</li>
              <li>Mise à jour du registre du personnel</li>
              <li>Suivi des visites médicales</li>
              <li>Préparation des documents d&apos;embauche</li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
