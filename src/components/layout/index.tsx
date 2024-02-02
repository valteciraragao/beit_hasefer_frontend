import { Outlet } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import S from "./style";
import logo from "../../assets/image/logoBeitHaShefer.png";

const BaseLayout = () => {
  return (
    <>
      <div>
        <S.HeaderStyle>
          <S.Img>
            <img src={logo} alt="Logo da beit Hasefer" />
          </S.Img>
          <S.Logo>
            <h1>Beit HaSefer</h1>
          </S.Logo>
          <S.ContentLogin>
            <S.Content>
              <p>ברוך</p>
              <p>השם</p>
            </S.Content>
            <S.Login>
              <IoPersonCircleOutline />
              <p>Entrar</p>
            </S.Login>
          </S.ContentLogin>
        </S.HeaderStyle>
        <S.Main>
          <Outlet />
        </S.Main>
        <S.FooterStyled>
          <div>
            <h3>Beit HaSefer</h3>
          </div>
          <div>
            &copy; Copyrigth Beit HaSefer
            <p>Direitos reservados</p>
            <p>Equipe de programação: Valtecir Aragão e Carolina Mendes</p>
          </div>
          <div></div>
        </S.FooterStyled>
      </div>
    </>
  );
};

export default BaseLayout;
