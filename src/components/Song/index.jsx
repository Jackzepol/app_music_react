//este módulo sirve para mostrar la lista de canciones usando un componente
// apoyado del uso de react


import React from "react";
import "./styles.css";

const Song = ({ title, artist, duration, onAdd, onRemove }) => {
  return (
    <div className="song">
      <h3>{title}</h3>
      <p>Artista: {artist}</p>
      <p>Duración: {duration}</p>

      {/* Botón para agregar (si existe la función onAdd) */}
      {onAdd && (
        <button 
          className="agregar" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAdd();
          }}
        >
          Agregar a mi biblioteca
        </button>
      )}

      {/* Botón para quitar (si existe la función onRemove) */}
      {onRemove && (
        <button 
          className="remover" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemove();
          }}
        >
          Quitar de mi biblioteca
        </button>
      )}
    </div>
  );
}

export default Song;