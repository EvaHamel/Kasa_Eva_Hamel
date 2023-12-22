import styled from "styled-components";
import Banner from "../../components/Banner";
import bannerPicture from "../../assets/banner.jpg";
import Fiche from "../../components/Fiche";
import logements from "../../data/logements.json";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Backgroung = styled.div`
  border-radius: 25px;
  background: #f6f6f6;

  width: 1140px;

  margin-top: 40px;
  padding: 50px;

  display: flex;
  flex-wrap: wrap;
  gap: 50px;

  justify-content: center;
`;

function Home() {
  return (
    <HomeContainer>
      <Banner
        bannerText="Chez vous, partout et ailleurs"
        bannerPicture={bannerPicture}
      />
      <Backgroung>
        {logements.map(({ id, cover, title }) => {
          return <Fiche image={cover} titre={title} idFiche={id} />;
        })}
      </Backgroung>
    </HomeContainer>
  );
}

export default Home;
