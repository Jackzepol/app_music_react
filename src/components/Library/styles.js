/*Estilos con react para la biblioteca*/

import styled from "styled-components";

export const LibraryContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;