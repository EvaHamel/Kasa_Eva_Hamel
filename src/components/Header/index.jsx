import { Link } from "react-router-dom/dist";
import logo from "../../assets/LOGO.jpg";
import styled from "styled-components";
import { useState } from "react";

const HeaderContainer = styled.nav`
  display: flex;
  width: 1240px;
  height: 70px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
`;

const Logo = styled.div``;

const NavContainer = styled.nav`
  display: flex;
  align-items: flex-start;
  margin-left: auto;
  gap: 60px;
`;

function Header() {
  const [isAccueil, setIsAccueil] = useState(false);
  const [isAPropos, setIsAPropos] = useState(false);

  const StyledLinkAccueil = styled(Link)`
    color: #ff6060;
    text-align: right;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%; /* 34.224px */
    text-decoration: ${isAccueil ? "" : "none"};
  `;

  const StyledLinkAPropos = styled(Link)`
    color: #ff6060;
    text-align: right;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%; /* 34.224px */
    text-decoration: ${isAPropos ? "" : "none"};
  `;

  function setAccueil() {
    setIsAccueil(true); //does not work ?
    setIsAPropos(false);
  }

  function setAPropos() {
    setIsAccueil(false);
    setIsAPropos(true);
  }

  return (
    <HeaderContainer>
      <Logo onClick={() => setAccueil()}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </Logo>
      <NavContainer>
        <StyledLinkAccueil to="/" onClick={() => setAccueil()}>
          Accueil
        </StyledLinkAccueil>
        <StyledLinkAPropos to="/apropos" onClick={() => setAPropos()}>
          A Propos
        </StyledLinkAPropos>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
