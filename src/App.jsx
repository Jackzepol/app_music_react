

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import SongDetailPage from "./pages/SongDetailPage";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:albumId" element={<SongDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;


/*
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetail from "./components/SongDetail";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <SearchResults />
              <Library />
            </>
          }
        />

        <Route path="/song/:albumId" element={<SongDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

/*
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SongDetailPage from "./pages/SongDetailPage";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:albumId" element={<SongDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;





/*
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import SongDetail from "./components/SongDetail";
import Library from "./components/Library";
import useFetch from "./Hook";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/Styles/globalStyles";
import theme from "./components/Styles/theme";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [artist, setArtist] = useState("");
  const [searchUrl, setSearchUrl] = useState(null);

  const handleSearch = () => {
    setArtist(inputValue);
    const encodedName = encodeURIComponent(inputValue);
    setSearchUrl(
      `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodedName}`
    );
  };

  const { data: albumsData, loading, error } = useFetch(searchUrl);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

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
              />

              <Library />
            </>
          }
        />

        <Route
          path="/song/:albumId/:trackId/:artist"
          element={<SongDetail />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
*/