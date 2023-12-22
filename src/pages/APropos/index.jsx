import bannerPicture from "../../assets/apropos.jpg";
import Banner from "../../components/Banner";
import styled from "styled-components";
import Valeur from "../../components/Valeur";

const AProposContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

const Valeurs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 1020px;
  height: 300px;
  padding-top: 40px;
`;

function APropos() {
  return (
    <AProposContainer>
      <Banner bannerText="" bannerPicture={bannerPicture} />
      <Valeurs>
        <Valeur text="Fiabilité"></Valeur>
        <Valeur text="Respect"></Valeur>
        <Valeur text="Service"></Valeur>
        <Valeur text="Sécurité"></Valeur>
      </Valeurs>
    </AProposContainer>
  );
}

export default APropos;
