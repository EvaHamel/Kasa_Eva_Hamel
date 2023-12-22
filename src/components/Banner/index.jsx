import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;
`;

const BannerPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerText = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 68.448px */

  display: flex;
  position: absolute;
  transform: translate(50%, 50%);
  z-index: 2;
`;

function Banner(props) {
  return (
    <BannerContainer>
      <BannerText>{props.bannerText}</BannerText>
      <BannerPicture src={props.bannerPicture} alt="banner"></BannerPicture>
    </BannerContainer>
  );
}

export default Banner;
