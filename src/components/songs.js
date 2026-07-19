//este módulo sirve para mostrar la lista de canciones usando un componente
// apoyado del uso de react


import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, duration } = this.props;

    return (
      <div className="song">
        <h3>{title}</h3>
        <p>Artista: {artist}</p>
        <p>Duración: {duration}</p>
      </div>
    );
  }
}

export default Song;
