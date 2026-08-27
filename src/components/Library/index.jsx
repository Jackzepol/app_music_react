
import React from "react";
import Song from "../Song/index";
import { LibraryContainer, Title, EmptyMessage } from "./styles";


const Library = ({ songs, onRemoveSong }) => {
  return (
    <LibraryContainer>
      <Title>Mi biblioteca</Title>

      {songs.length === 0 && <EmptyMessage className="message">No has agregado canciones aún.</EmptyMessage>}

      {songs.map((song) => (
        <Song
          key={song.idTrack || Math.random()}
          title={song.strTrack}
          artist={song.strArtist}
          duration={song.intDuration}
          onRemove={() => onRemoveSong(song.idTrack)}
        />
      ))}
    </LibraryContainer>
  );
}

export default Library;