


import React from "react";
import Song from "../Song/index";
import "./styles.css";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2 className="title">Mi biblioteca</h2>

      {songs.length === 0 && <p className="message">No has agregado canciones aún.</p>}

      {songs.map((song) => (
        <Song
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
    </div>
  );
}

export default Library;
