

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailContainer, Title, Info, Message } from "./styles";

function SongDetail() {
  const { albumId } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      .catch(() => {
        setError("Error al cargar los detalles.");
        setLoading(false);
      });
  }, [albumId]);

  if (loading) return <Message>Cargando detalles...</Message>;
  if (error) return <Message>{error}</Message>;
  if (!song) return <Message>No se encontró información.</Message>;

  return (
    <DetailContainer>
      <Title>{song.strAlbum}</Title>
      <Info><strong>Artista:</strong> {song.strArtist}</Info>
      <Info><strong>Álbum:</strong> {song.strAlbum}</Info>
      {song.intYearReleased && (
        <Info><strong>Año de lanzamiento:</strong> {song.intYearReleased}</Info>
      )}
    </DetailContainer>
  );
}

export default SongDetail;