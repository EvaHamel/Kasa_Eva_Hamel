import { useParams } from "react-router-dom";
import Carrousel from "../../components/Carrousel";
import Summary from "../../components/Summary";
import styled from "styled-components";
import Hote from "../../components/Hote";
import Dropdown from "../../components/Dropdown";

import logements from "../../data/logements.json";

const ContentSummaryHote = styled.div`
  display: flex;
  width: 1240px;
  justify-content: space-between;
  align-items: center;
`;

const FicheLogementContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Dropdowns = styled.div`
  display: flex;
  justify-content: space-between;
  //gap: 30px;
  width: 1240px;
  //height: 50px;
  padding-top: 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: #ff6060;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 142.6%; /* 25.668px */
`;

function FicheLogement() {
  const { idFiche } = useParams();

  console.log(idFiche);

  const logement = logements.find((logement) => logement.id === idFiche);
  console.log(logement);

  const listImages = logement.pictures;

  return (
    <FicheLogementContainer>
      <Carrousel images={listImages} />
      <ContentSummaryHote>
        <Summary
          titre={logement.title}
          lieu={logement.location}
          tags={logement.tags}
        />
        <Hote
          nom={logement.host.name}
          photo={logement.host.picture}
          stars={logement.rating}
        />
      </ContentSummaryHote>
      <Dropdowns>
        <Dropdown text="Description" content={logement.description}></Dropdown>
        <Dropdown
          text="Equipement"
          content=<ContentContainer>
            {logement.equipments.map((equipment) => {
              return <div>{equipment}</div>;
            })}
          </ContentContainer>
        ></Dropdown>
      </Dropdowns>
    </FicheLogementContainer>
  );
}

export default FicheLogement;
