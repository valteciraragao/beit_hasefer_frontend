import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/index";

export const GlobalStyled = createGlobalStyle`
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Sometype mono";
    }

    :root{
        font-size: ${px2vw(24)};

        @media (min-width: 768px){
            font-size: ${px2vw(18)};
        }

        @media (min-width: 1024px){
            font-size: ${px2vw(16)};
        }
    }
`;
