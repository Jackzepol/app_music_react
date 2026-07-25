//este módulo sirve para mostrar la lista de canciones usando un componente
// apoyado del uso de react


import React from "react";
import "./styles.css";

const Song = ({ title, artist, duration, onAdd }) => {
  return (
    <div className="song">
      <h3>{title}</h3>
      <p>Artista: {artist}</p>
      <p>Duración: {duration}</p>

      {onAdd && (
        <button className="agregar" onClick={onAdd}>
          Agregar a mi biblioteca
        </button>
      )}
    </div>
  );
}

export default Song;

