import ContentContainer from "@/components/ContentContainer";

export default function Professionnels() {
  return (
    <ContentContainer>
      <h1 className="text-2xl">Assistance administrative</h1>
      <ul className="list-disc mb-4">
        <li>Gestion de planning et agenda</li>
        <li>Gestion courrier / mails (traitement, rédaction…)</li>
        <li>
          Création et mise à jour de document type, tableaux de bord, suivis…
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

      <h1 className="text-2xl">Assistance commerciale</h1>
      <ul className="list-disc mb-4">
        <li>Elaboration de devis</li>
        <li>Suivi et relance</li>
        <li>Traitement des réclamations</li>
        <li>Création et suivi d&apos;une base de données clients</li>
        <li>
          Organisation d&apos;évènement (séminaire, assemblée générale, journée
          portes ouvertes,…)
        </li>
      </ul>

      <h1 className="text-2xl">Assistance pré-comptable</h1>
      <ul className="list-disc mb-4">
        <li>Préparation des éléments à remettre à votre cabinet comptable</li>
        <li>Suivi des encaissements et relance des impayés</li>
        <li>Contrôle et suivi des factures fournisseurs et clients</li>
        <li>
          Suivi de la trésorerie
          <br />
          Je n&apos;ai pas le droit d&apos;exercer la comptabilité, ceci est un
          domaine réservé aux experts comptables selon l&apos;
          <a
            href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033678961"
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:text-gold"
          >
            ordonnance du 19 septembre 1945
          </a>
          . Je n&apos;interviens donc jamais sur logiciel comptable, tant dans
          mon intérêt que dans le vôtre.
        </li>
      </ul>

      <h1 className="text-2xl">Assistance ressources humaines</h1>
      <ul className="list-disc mb-4">
        <li>Création et mise en ligne d&apos;offre d&apos;emploi</li>
        <li>Pré-sélection de CV</li>
        <li>Entretien préalable</li>
        <li>Mise à jour du registre du personnel</li>
        <li>Suivi des visites médicales</li>
        <li>Préparation des documents d&apos;embauche</li>
      </ul>
    </ContentContainer>
  );
}
