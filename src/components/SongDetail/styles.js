//Estilos con react para los detalles de las canciones


import styled from "styled-components";

export const DetailContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 8px;
  background-color: #fdfdfd;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  margin: 0 0 1rem 0;
  color: #222;
`;

export const Info = styled.p`
  margin: 0.5rem 0;
  color: #444;

  strong {
    color: #000;
  }
`;

export const Message = styled.p`
  margin: 0.5rem 0;
  color: #888;
  font-style: italic;
`;

