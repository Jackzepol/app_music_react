//este módulo sirve para mostrar la lista de canciones usando un componente
// apoyado del uso de react

import React from "react";
import { SongContainer, Button } from "./styles";

const Song = ({ title, artist, duration, onAdd, onRemove }) => {
  return (
    <SongContainer>
      <h3>{title}</h3>
      <p>Artista: {artist}</p>
      <p>Duración: {duration}</p>

      {onAdd && (
        <Button
          className="agregar"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAdd();
          }}
        >
          Agregar a mi biblioteca
        </Button>
      )}

      {onRemove && (
        <Button
          className="remover"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
        >
          Quitar de mi biblioteca
        </Button>
      )}
    </SongContainer>
  );
};

export default Song;