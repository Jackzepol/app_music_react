
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Song from "../Song";
import "./styles.css";

const SearchResults = ({ artist, albumsData, loading, error, onAddSong }) => {
  const [songs, setSongs] = useState([]);
  const [loadingTracks, setLoadingTracks] = useState(false);

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

  // Mensajes condicionales
  if (loading || loadingTracks) return <p>Cargando canciones...</p>;
  if (error) return <p>Error al cargar los datos. Intenta nuevamente.</p>;
  if (!artist) return <p>Ingresa un artista para buscar canciones.</p>;
  if (!songs.length) return <p>No se encontraron canciones para "{artist}".</p>;

  return (
    <div className="search-results">
      <h2 className="title">Resultados de búsqueda</h2>

      {songs.map((song) => (
        <div key={song.idTrack || Math.random()}>
          <Link
            to={`/song/${song.idAlbum}/${song.idTrack}/${song.strArtist}`}
          >
            <Song
              title={song.strTrack}
              artist={song.strArtist}
              duration={song.intDuration}
              onAdd={() => onAddSong(song)}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;