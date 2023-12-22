import styled from "styled-components";
import arrow_back from "../../assets/arrow_back.jpg";
import { useState } from "react";

const DropdownContainer = styled.div``;

const DropdownLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;

  width: 580px;

  padding-left: 20px;
  padding-top: 5px;

  background-color: #ff6060;

  text-align: center;
`;

const DropdownLabel = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 34.224px */

  text-align: center;
  vertical-align: middle;
`;

function Dropdown(props) {
  const [isDropdowned, setIsDropdowned] = useState(true);

  function switchContent() {
    isDropdowned ? setIsDropdowned(false) : setIsDropdowned(true);
  }

  const Arrow = styled.img`
    padding-right: 20px;
    padding-bottom: 0px;
    padding-top: 10 px;
    padding-left: 20px;
    transform: ${isDropdowned ? " scaleX(-1) scaleY(-1)" : ""};
  `;

  const DropdownContentContainer = styled.div`
    background-color: #f6f6f6;
    width: 560px;
    height: auto;
    display: ${isDropdowned ? "flex" : "none"};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 20px;

    color: #ff6060;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 142.6%; /* 25.668px */
  `;

  return (
    <DropdownContainer>
      <DropdownLabelContainer onClick={() => switchContent()}>
        <DropdownLabel>{props.text}</DropdownLabel>
        <Arrow src={arrow_back}></Arrow>
      </DropdownLabelContainer>
      <DropdownContentContainer>{props.content}</DropdownContentContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
