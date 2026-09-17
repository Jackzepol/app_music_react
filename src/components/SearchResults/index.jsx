

import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Song from "../Song";
import { ResultsContainer, Title, SongWrapper, Message } from "./styles";
import { addSong } from "../../redux/slices/librarySlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  
  const { results, loading, error } = useSelector((state) => state.search);

  const handleAddSong = (song) => {
    
    const formattedSong = {
      idAlbum: song.idAlbum || song.idTrack,
      strTrack: song.strTrack || song.strAlbum,
      strArtist: song.strArtist,
      strAlbum: song.strAlbum,
      intDuration: song.intDuration
    };

    dispatch(addSong(formattedSong));
  };

  if (loading) {
    return (
      <ResultsContainer>
        <Message>Cargando resultados...</Message>
      </ResultsContainer>
    );
  }

  if (error) {
    return (
      <ResultsContainer>
        <Message>{error}</Message>
      </ResultsContainer>
    );
  }

  if (!results || results.length === 0) {
    return (
      <ResultsContainer>
        <Message>No hay resultados para mostrar. Realiza una búsqueda.</Message>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <Title>Resultados de búsqueda</Title>

      {results.map((song) => {
        const songKey = song.idTrack || song.idAlbum;
        
        return (
          <SongWrapper key={songKey}>
            <Link to={`/song/${song.idAlbum || song.idTrack}`}>
              <Song
                title={song.strTrack || song.strAlbum}
                artist={song.strArtist}
                duration={song.intDuration}
                onAdd={() => handleAddSong(song)}
              />
            </Link>
          </SongWrapper>
        );
      })}
    </ResultsContainer>
  );
};

export default SearchResults;