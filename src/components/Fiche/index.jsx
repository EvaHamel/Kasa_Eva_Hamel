import styled from "styled-components";
import { Link } from "react-router-dom";

const FicheContainer = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(#ff6060, #ff6060, #000000 150%);
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TitreLocation = styled.div`
  width: 300px;

  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  //font-style: normal;
  font-weight: 500;
  text-decoration: none;
  //line-height: 142.6%; /* 25.668px */
`;

function Fiche(props) {
  const ImageLocation = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 25px;
    margin-bottom: 40px;
    display: "flex";
  `;

  const url = `/fichelogement/${props.idFiche}`;
  return (
    <Link to={url}>
      <FicheContainer>
        <ImageLocation src={props.image} />
        <TitreLocation> {props.titre}</TitreLocation>
      </FicheContainer>
    </Link>
  );
}

export default Fiche;
