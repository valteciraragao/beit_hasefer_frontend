import { GlobalStyled } from "./assets/style/global.style";
import Modal from "./components/modal";
import Router from "./router";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(true);
  const offModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <GlobalStyled />
      {showModal === true && <Modal closeModal={offModal} />}
      <Router />
    </>
  );
}

export default App;
