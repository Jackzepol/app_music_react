/*Estilos conr eact para la barra de búsqueda*/

import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  padding: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

export const Input = styled.input`
  width: 500px; /* más ancho */
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 18px; /* más grande */
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;