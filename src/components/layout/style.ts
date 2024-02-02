import styled from "styled-components";
import px2vw from "../../assets/utils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100vw;
  max-height: 100vh;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: #03affd;
`;

const Logo = styled.div`
  color: white;
  font-weight: 800;
  font-size: ${px2vw(30)};
`;

const Img = styled.div`
  img {
    width: ${px2vw(150)};
    height: ${px2vw(70)};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${px2vw(18)};
  font-weight: 800;
  color: white;
`;

const ContentLogin = styled.div`
  display: flex;
  gap: ${px2vw(20)};
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4vw;
  color: white;
  font-weight: 500;
  font-size: ${px2vw(20)};
  svg {
    width: ${px2vw(30)};
    height: ${px2vw(30)};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: #03affd;
`;

export default {
  Container,
  HeaderStyle,
  Logo,
  Img,
  Content,
  ContentLogin,
  Login,
  Main,
  FooterStyled,
};
