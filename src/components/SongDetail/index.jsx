

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailContainer, Title, Info, Message } from "./styles";

function SongDetail() {
  const { albumId, trackId } = useParams();
  
  const searchResults = useSelector((state) => state.search.results);
  
  const foundSong = searchResults.find(
    (item) => String(item.idAlbum || item.idTrack) === String(albumId || trackId)
  );

  const [song, setSong] = useState(foundSong || null);
  const [loading, setLoading] = useState(!foundSong);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!foundSong && albumId) {
      setLoading(true);
      fetch(`https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?m=${albumId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.album) {
            setSong(data.album[0]);
          } else {
            setError("No se encontró información.");
          }
          setLoading(false);
        })
        .catch((err) => {
          setError("Error al cargar los detalles.");
          setLoading(false);
        });
    }
  }, [foundSong, albumId]);

  if (loading) return <Message>Cargando detalles...</Message>;
  if (error) return <Message>{error}</Message>;
  if (!song) return <Message>No se encontró información de esta canción o álbum.</Message>;

  return (
    <DetailContainer>
      <Title>{song.strAlbum || song.strTrack}</Title>
      <Info><strong>Artista:</strong> {song.strArtist}</Info>
      <Info><strong>Álbum:</strong> {song.strAlbum}</Info>
      {song.intYearReleased && (
        <Info><strong>Año de lanzamiento:</strong> {song.intYearReleased}</Info>
      )}
    </DetailContainer>
  );
}

export default SongDetail;