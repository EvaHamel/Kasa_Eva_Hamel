import styled from "styled-components";
import logoFooter from "../../assets/logo_footer.png";

function Footer() {
  const FooterContent = styled.div`
    display: flex;
    width: 1440px;
    height: 209px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    background: #000;
  `;

  const Copyright = styled.p`
    color: #fff;
    text-align: center;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%; /* 34.224px */
  `;

  const LogoImg = styled.img`
    width: 122px;
    flex-shrink: 0;
  `;

  return (
    <FooterContent>
      <LogoImg src={logoFooter} alt="Kasa" />
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContent>
  );
}

export default Footer;
