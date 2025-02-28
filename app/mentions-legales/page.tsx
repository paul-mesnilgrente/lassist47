import ContentContainer from "@/components/ContentContainer";

export default function MentionsLegales() {
  return (
    <ContentContainer>
      <h1 className="text-2xl pb-3">Mentions légales</h1>

      <h2 className="text-xl pb-2">Société editrice</h2>
      <p className="pb-2">
        EI Ludivine PELOSATO, enregistrée sous le nom L&apos;Assist&apos;47
        <br />
        SIREN n° 123 456 789 RCS Agen
        <br />
        518 côte de Limousy, 47380 Pinel-Hauterive
        <br />
        <a
          href="mailto:lpelosato@lassist47.fr"
          className="underline hover:text-gold"
        >
          lpelosato@lassist47.fr
        </a>
        <br />
        <a href="tel:+33788067519" className="underline hover:text-gold">
          07 88 06 75 19
        </a>
      </p>

      <p className="pb-2">
        Responsable de publication : Ludivine PELOSATO
        <br />
        Créateur du site : EI Paul MESNILGRENTE,{" "}
        <a
          href="mailto:pro@paul-mesnilgrente.com"
          className="underline hover:text-gold"
        >
          pro@paul-mesnilgrente.com
        </a>
        <br />
        Charte graphique : Aurélien PELOSATO
      </p>

      <h2 className="text-xl pb-2">Hébergeur</h2>
      <p className="pb-2">
        GitHub, Inc.
        <br />
        88 Colin P. Kelly Jr. Street
        <br />
        San Francisco, CA 94107
        <br />
        États-Unis
        <br />
        Site web :{" "}
        <a
          href="https://pages.github.com"
          target="_blank"
          rel="noreferrer noopener"
          className="underline hover:text-gold"
        >
          https://pages.github.com
        </a>
      </p>

      <h2 className="text-xl pb-2">Politique de confidentialité</h2>
      <p className="pb-2">
        L&apos;Assist&apos;47 ne collecte des informations personnelles
        relatives à l&apos;utilisateur que pour le besoin de certains services
        proposés par le site lassist47.fr. L&apos;utilisateur fournit ces
        informations en toute connaissance de cause, notamment lorsqu&apos;il
        procède par lui-même à leur saisie. Il est alors précisé à
        l&apos;utilisateur du site lassist47.fr l&apos;obligation ou non de
        fournir ces informations.
      </p>
      <p className="pb-2">
        Conformément à la loi Informatique et Libertés du 6 janvier 1978
        modifiée et au Règlement Général sur la Protection des Données (RGPD),
        l&apos;utilisateur dispose d&apos;un droit d&apos;accès, de
        rectification, de suppression et d&apos;opposition aux données le
        concernant. Il peut exercer ces droits en me contactant à l&apos;adresse
        mentionnée ci-dessus ou par mail à lpelosato@lassist47.fr.
      </p>
    </ContentContainer>
  );
}
