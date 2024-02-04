import styled, { keyframes } from "styled-components";
import px2vw from "../../assets/utils";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Icon = styled.div`
  margin-top: 6vh;
  img {
    width: 50vw;
    height: 50vh;
    object-fit: contain;
    object-position: center;
  }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const BlinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
`;

const TypewriterText = styled.span`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.15em;
  animation: ${typing} 3.5s steps(40, end),
    ${BlinkCaret} 0.75s step-end infinite;
`;

const CloseModal = styled.div`
  position: absolute;
  top: 2vh;
  right: 2vh;
  cursor: pointer;
  svg {
    fill: #03affd;
    width: ${px2vw(20)};
    height: ${px2vw(20)};
  }
`;

const Content = styled.div`
  margin-top: 2vh;
  color: #03affd;
  h2 {
    text-align: center;
    font-size: ${px2vw(40)};
  }
`;

export default {
  Box,
  Icon,
  Content,
  typing,
  BlinkCaret,
  TypewriterText,
  CloseModal,
};
