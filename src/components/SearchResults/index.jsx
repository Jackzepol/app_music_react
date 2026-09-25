


import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Song from "../Song";
import { ResultsContainer, Title, SongWrapper, Message } from "./styles";
import { addSong } from "../../redux/slices/librarySlice";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);

  console.log("Resultados actuales en Redux:", results); // <-- Agrega esto

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

  if (loading) return <Message>Cargando resultados...</Message>;
  if (error) return <Message>{error}</Message>;
  if (!results || results.length === 0)
    return <Message>No hay resultados para mostrar.</Message>;

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