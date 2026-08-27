/*Estilos para el header de la app*/ 

import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  color: white;
  text-align: center;
`;

export default HeaderContainer;