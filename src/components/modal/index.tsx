import animation from "../../assets/image/showModal.gif";
import { IoMdCloseCircle } from "react-icons/io";
import S from "./style";
import Typewriter from "typewriter-effect";

type Props = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: Props) => {
  return (
    <>
      <S.Box onClick={closeModal}>
        <S.CloseModal>
          <IoMdCloseCircle onClick={closeModal} />
        </S.CloseModal>
        <S.Content>
          <h2>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Seja bem vindo!")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    "Aprenda como se conectar ao Criador e ter uma vida plena!"
                  )
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </S.Content>
        <S.Icon>
          <img src={animation} alt="Animação com o logo da beit" />
        </S.Icon>
      </S.Box>
    </>
  );
};

export default Modal;
