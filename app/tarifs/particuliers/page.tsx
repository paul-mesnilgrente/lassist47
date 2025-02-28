import ContentContainer from "@/components/ContentContainer";
import TarifsTabs from "@/components/TarifsTabs";

export default function Particuliers() {
  return (
    <ContentContainer tabs={<TarifsTabs />}>
      <ul className="list-disc mb-4">
        <li>
          Tarif à l&apos;heure : 25€ l&apos;heure
          <br /> Possibilité de paiement en CESU offrant droit à 50€ de crédit
          d&apos;impôt
        </li>
        <li>Pour l&apos;évenementiel : 30€ l&apos;heure</li>
      </ul>
      <p>Devis selon vos besoins à la demande.</p>
    </ContentContainer>
  );
}
