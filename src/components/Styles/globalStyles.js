/*Estilos generales para la app*/

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globales del body */
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
  }

  /* Quitar estilos por defecto de botones */
  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Quitar estilos por defecto de enlaces */
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
