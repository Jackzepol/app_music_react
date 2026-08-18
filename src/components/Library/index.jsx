
import React from "react";
import Song from "../Song/index";
import "./styles.css";

const Library = ({ songs, onRemoveSong }) => {
  return (
    <div className="library">
      <h2 className="title">Mi biblioteca</h2>

      {songs.length === 0 && <p className="message">No has agregado canciones aún.</p>}

      {songs.map((song) => (
        <Song
          key={song.idTrack || Math.random()}
          title={song.strTrack}
          artist={song.strArtist}
          duration={song.intDuration}
          onRemove={() => onRemoveSong(song.idTrack)}
        />
      ))}
    </div>
  );
}

export default Library;