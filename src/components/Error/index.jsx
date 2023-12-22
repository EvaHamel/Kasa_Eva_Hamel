import styled from "styled-components";
import "@fontsource/montserrat";
import { StyledLinkSmall } from "../../utils/style/Atoms";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 140px;
  padding-bottom: 140px;
`;

const ErreurTitre = styled.div`
  width: 600px;
  height: 260px;
  color: #ff6060;
  text-align: center;
  font-family: Montserrat;
  font-size: 288px;
  font-style: normal;
  font-weight: 700;
  line-height: 142.6%; /* 410.688px */
`;

const ErreurMessage = styled.div`
  width: 872px;
  color: #ff6060;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 51.336px */
`;

function Error() {
  return (
    <ErrorContainer>
      <ErreurTitre>404</ErreurTitre>
      <ErreurMessage>
        Oups! La page que vous demandez n'existe pas.
      </ErreurMessage>
      <StyledLinkSmall to="/">Retourner sur la page d'accueil</StyledLinkSmall>
    </ErrorContainer>
  );
}

export default Error;
