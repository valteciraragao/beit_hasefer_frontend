import S from "./style";
import Menu from "../../components/menu/index";
import Carousel from "../../components/carousel";

const Home = () => {
  return (
    <S.Container>
      <Carousel></Carousel>
      <Menu></Menu>
    </S.Container>
  );
};

export default Home;
