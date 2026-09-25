

import React from "react";
import Song from "../Song";
import { LibraryContainer, Title, EmptyMessage } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/slices/librarySlice";

const Library = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.library.songs);

  const handleRemove = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <LibraryContainer>
      <Title>Mi biblioteca</Title>

      {songs.length === 0 && (
        <EmptyMessage>No has agregado canciones aún.</EmptyMessage>
      )}

      {songs.map((song) => {
        const songId = song.idAlbum || song.id;

        return (
          <Song
            key={songId}
            title={song.strTrack || song.title}
            artist={song.strArtist || song.artist}
            duration={song.intDuration || song.duration}
            onRemove={() => handleRemove(songId)}
          />
        );
      })}
    </LibraryContainer>
  );
};

export default Library;