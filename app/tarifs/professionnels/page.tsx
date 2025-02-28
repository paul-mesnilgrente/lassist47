import ContentContainer from "@/components/ContentContainer";

export default function Professionnels() {
  return (
    <ContentContainer>
      <ul className="list-disc mb-4">
        <li>
          Tarif à l&apos;heure : 30€ en télétravail ; 32€ sur site (max 30km)
        </li>
        <li>
          Tarif au forfait (au mois) : 2h/semaine 250€ ; 3h/semaine 360€ ;
          4h/semaine 470€
        </li>
      </ul>
      <p>Devis selon vos besoins à la demande.</p>
    </ContentContainer>
  );
}
