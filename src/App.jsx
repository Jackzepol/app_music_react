
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import Library from "./components/Library";
import useFetch from "./Hook";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [artist, setArtist] = useState("");
  const [library, setLibrary] = useState([]);
  const [searchUrl, setSearchUrl] = useState(null);

  const handleRemoveSong = (songId) => {
    setLibrary(library.filter((song) => song.idTrack !== songId));
  };

  const handleAddSong = (song) => {
    setLibrary((prev) => [...prev, song]);
  };

  const handleSearch = () => {
    setArtist(inputValue);
    const encodedName = encodeURIComponent(inputValue);
    setSearchUrl(
      `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodedName}`
    );
  };
  
  const { data: albumsData, loading, error } = useFetch(searchUrl);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSearch={handleSearch}
              />

              <SearchResults
                artist={artist}
                albumsData={albumsData}
                loading={loading}
                error={error}
                onAddSong={handleAddSong}
              />

              <Library 
              songs={library} 
              onRemoveSong={handleRemoveSong}
              />
            </>
          }
        />

        <Route
          path="/song/:albumId/:trackId/:artist"
          element={<SongDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;