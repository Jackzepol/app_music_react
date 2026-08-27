/*Estilos con react para el componente song*/

import styled from "styled-components";

export const SongContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background-color: #f9f9f9;

  h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  p {
    margin: 0.25rem 0;
    color: #555;
  }
`;

export const Button = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &.agregar {
    background-color: #4caf50;
    color: white;
  }

  &.remover {
    background-color: #f44336;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
`;
