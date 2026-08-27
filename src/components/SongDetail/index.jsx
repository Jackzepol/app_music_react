
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hook";
import { DetailContainer, Title, Info, Message } from "./styles";

function SongDetail() {
  const { albumId, trackId } = useParams();

  const {
    data: trackData,
    loading,
    error
  } = useFetch(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${albumId}`);

  if (loading) return <Message>Cargando detalles...</Message>;
  if (error) return <Message>Error al cargar los detalles.</Message>;

  if (!trackData || !trackData.track)
    return <Message>No se encontró información del álbum.</Message>;

  const song = trackData.track.find((t) => t.idTrack === trackId);

  if (!song) return <Message>No se encontró información de esta canción.</Message>;

  return (
    <DetailContainer>
      <Title>{song.strTrack}</Title>
      <Info><strong>Artista:</strong> {song.strArtist}</Info>
      <Info><strong>Álbum:</strong> {song.strAlbum}</Info>
      <Info><strong>Duración:</strong> {song.intDuration} segundos</Info>
    </DetailContainer>
  );
}

export default SongDetail;
