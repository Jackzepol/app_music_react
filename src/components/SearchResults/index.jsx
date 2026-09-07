
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Song from "../Song";

import { ResultsContainer, Title, SongWrapper, Message } from "./styles";

import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";

const SearchResults = ({ artist, albumsData, loading, error }) => {
  const [songs, setSongs] = useState([]);
  const [loadingTracks, setLoadingTracks] = useState(false);

  const dispatch = useDispatch();

  const handleAddSong = (song) => {
    const formattedSong = {
      id: song.idTrack,
      title: song.strTrack,
      artist: song.strArtist,
      album: song.strAlbum,
      duration: song.intDuration
    };

    dispatch(addSong(formattedSong));
  };

  useEffect(() => {
    const fetchTracks = async () => {
      if (!albumsData || !albumsData.album) {
        setSongs([]);
        return;
      }

      setLoadingTracks(true);
      const allTracks = [];

      for (const album of albumsData.album) {
        try {
          const response = await fetch(
            `https://www.theaudiodb.com/api/v1/json/123/track.php?m=${album.idAlbum}`
          );
          const json = await response.json();

          if (json && Array.isArray(json.track)) {
            allTracks.push(...json.track);
          }
        } catch (err) {
          console.error("Error al cargar canciones del álbum", err);
        }
      }

      setSongs(allTracks);
      setLoadingTracks(false);
    };

    fetchTracks();
  }, [albumsData]);

  if (loading || loadingTracks) {
    return (
      <ResultsContainer>
        <Message>Cargando canciones...</Message>
      </ResultsContainer>
    );
  }

  if (error) {
    return (
      <ResultsContainer>
        <Message>Error al cargar los datos. Intenta nuevamente.</Message>
      </ResultsContainer>
    );
  }

  if (!artist) {
    return (
      <ResultsContainer>
        <Message>Ingresa un artista para buscar canciones.</Message>
      </ResultsContainer>
    );
  }

  if (!songs.length) {
    return (
      <ResultsContainer>
        <Message>No se encontraron canciones para "{artist}".</Message>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      <Title>Resultados de búsqueda</Title>

      {songs.map((song) => (
        <SongWrapper key={song.idTrack}>
          <Link to={`/song/${song.idAlbum}/${song.idTrack}/${song.strArtist}`}>
            <Song
              title={song.strTrack}
              artist={song.strArtist}
              duration={song.intDuration}
              onAdd={() => handleAddSong(song)}
            />
          </Link>
        </SongWrapper>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;