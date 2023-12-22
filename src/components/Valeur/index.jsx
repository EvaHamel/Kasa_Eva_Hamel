import styled from "styled-components";
import arrow_back from "../../assets/arrow_back.jpg";

const ValeurContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 5px;

  padding-left: 20px;
  padding-top: 10px;

  flex: 1 0 0;
  align-self: stretch;

  background-color: #ff6060;
`;

const ValeurText = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */
`;

const Arrow = styled.img`
  padding-right: 20px;
  padding-bottom: 10px;
`;

function Valeur(props) {
  return (
    <ValeurContainer>
      <ValeurText>{props.text}</ValeurText>
      <Arrow src={arrow_back}></Arrow>
    </ValeurContainer>
  );
}

export default Valeur;
