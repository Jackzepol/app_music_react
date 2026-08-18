
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hook";
import "./styles.css";

function SongDetail() {
  const { albumId, trackId } = useParams();

  // CAMBIO CLAVE: Usamos track.php en lugar de album.php
  const {
    data: trackData,
    loading,
    error
  } = useFetch(`https://www.theaudiodb.com/api/v1/json/123/track.php?m=${albumId}`);

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error al cargar los detalles.</p>;

  // Validamos que el arreglo de tracks exista
  if (!trackData || !trackData.track)
    return <p>No se encontró información del álbum.</p>;

  // Buscamos la canción específica
  const song = trackData.track.find((t) => t.idTrack === trackId);

  if (!song) return <p>No se encontró información de esta canción.</p>;

  return (
    <div className="song-detail">
      <h2>{song.strTrack}</h2>
      <p><strong>Artista:</strong> {song.strArtist}</p>
      <p><strong>Álbum:</strong> {song.strAlbum}</p>
      <p><strong>Duración:</strong> {song.intDuration} segundos</p>
    </div>
  );
}

export default SongDetail;