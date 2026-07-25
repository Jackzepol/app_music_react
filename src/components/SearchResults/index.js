


import React from "react";
import Song from "../Song/index";
import "./styles.css";

const SearchResults = ({ songs, onAddSong }) => {
  return (
    <div className="searchRresults">
      <h2 className="title">Resultados de búsqueda</h2>

      {songs.map((song) => (
        <Song
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          onAdd={() => onAddSong(song)}
        />
      ))}
    </div>
  );
}

export default SearchResults;
