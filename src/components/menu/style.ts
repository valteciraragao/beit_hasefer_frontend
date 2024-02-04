import styled from "styled-components";

const ContentMain = styled.div`
  display: flex;
`;

const Menu = styled.nav`
  background: #03affd;
  padding-top: 5vh;
  width: 25vw;
  height: 100vh;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;
  margin-top: 2px;
  margin-left: 20px;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
    fill: #ffffff;
  }

  p {
    font-size: 18px;
    color: #ffffff;
    font-weight: 800;
  }

  &:hover {
    background-color: #ffffff;
    padding-left: 1vw;
    width: 290px;
    height: 65px;
    border-radius: 8px;

    svg {
      width: 24px;
      height: 24px;
      fill: #03affd;
    }

    p {
      color: #03affd;
    }
  }
`;

const Main = styled.div`
  img {
    width: 75vw;
    height: 100vh;
  }
`;

export default {
  ContentMain,
  Main,
  Menu,
  Icon,
};
