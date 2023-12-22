import styled from "styled-components";
import { useState } from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

const CarrouselContainer = styled.div`
  width: 1240px;
  height: 415px;
  background-color: #f6f6f6;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const CarrouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArrowLeft = styled.img`
  display: flex;
  position: absolute;
  transform: translate(0%, 175px);
  z-index: 2;
`;

const ArrowRight = styled.img`
  display: flex;
  position: absolute;
  transform: translate(1190px, 175px);
  z-index: 2;
`;

const CarrouselText = styled.div`
  //display: flex;
  position: absolute;
  transform: translate(600px, 375px);
  z-index: 2;

  display: flex;
  width: 50px;
  height: 32.402px;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

function Carrousel(props) {
  let listImages = props.images;

  const urlImgDefaut =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxBClJiLKIN7S25p3gK_5aX_HSxGZ_kbnrA&usqp=CAU";

  listImages = listImages != null ? listImages : [urlImgDefaut];

  const [index, setIndex] = useState(0);

  const [urlImgDisplay, setUrlImgDisplay] = useState(listImages[index]);

  const nbImages = listImages.length;

  const setPictureLeft = () => {
    var indexBis = index;
    if (index === 0) {
      indexBis = nbImages - 1;
      setIndex(indexBis);
    } else {
      indexBis -= 1;
      setIndex(indexBis);
    }

    setUrlImgDisplay(listImages[indexBis]);
  };

  const setPictureRight = () => {
    var indexBis = index;
    if (index === nbImages - 1) {
      indexBis = 0;
      setIndex(indexBis);
    } else {
      indexBis += 1;
      setIndex(indexBis);
    }
    setUrlImgDisplay(listImages[indexBis]);
  };

  return (
    <CarrouselContainer>
      <CarrouselImage src={urlImgDisplay}></CarrouselImage>
      <ArrowLeft src={arrowLeft} onClick={() => setPictureLeft()}></ArrowLeft>
      <ArrowRight
        src={arrowRight}
        onClick={() => setPictureRight()}
      ></ArrowRight>
      <CarrouselText>
        {index + 1} / {"" + nbImages}
      </CarrouselText>
    </CarrouselContainer>
  );
}

export default Carrousel;
