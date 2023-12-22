import styled from "styled-components";

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Titre = styled.div`
  color: #ff6060;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 51.336px */
`;

const Lieu = styled.div`
  color: #ff6060;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 142.6%; /* 25.668px */
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 24px;
  gap: 10px;
`;

const Tag = styled.div`
  width: auto;
  height: 25px;
  color: #ffffff;
  background-color: #ff6060;
  border-radius: 25px;
  text-align: center;
  vertical-align: middle;
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;

function Summary(props) {
  return (
    <SummaryContainer>
      <Titre>{props.titre}</Titre>
      <Lieu>{props.lieu}</Lieu>
      <TagsContainer>
        {props.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </TagsContainer>
    </SummaryContainer>
  );
}

export default Summary;
