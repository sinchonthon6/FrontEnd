import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
 a{
    text-decoration: none;
    color: white;
  }
`;

export default GlobalStyles;
