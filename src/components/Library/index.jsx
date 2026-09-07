
import React from "react";
import Song from "../Song";
import { LibraryContainer, Title, EmptyMessage } from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/libraryActions";

const Library = () => {
  const dispatch = useDispatch();

  // El estado global ES la biblioteca (un array)
  const library = useSelector(state => state);

  const handleRemove = (id) => {
    dispatch(removeSong(id));
  };

  return (
    <LibraryContainer>
      <Title>Mi biblioteca</Title>

      {library.length === 0 && (
        <EmptyMessage>No has agregado canciones aún.</EmptyMessage>
      )}

      {library.map((song) => (
        <Song
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
          onRemove={() => handleRemove(song.id)}
        />
      ))}
    </LibraryContainer>
  );
};

export default Library;