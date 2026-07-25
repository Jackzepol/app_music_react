




import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Library from "./components/Library";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResults] = useState([
    { id: 1, title: "Imagine", artist: "John Lennon", duration: "3:04" },
    { id: 2, title: "Billie Jean", artist: "Michael Jackson", duration: "4:54" },
    { id: 3, title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" }
  ]);

  const [library, setLibrary] = useState([]);

  const handleAddSong = (song) => {
    setLibrary((prev) => [...prev, song]);
  };

  useEffect(() => {
    console.log("La biblioteca se actualizó:", library);
  }, [library]);

  return (
    <div className="App">
      <Header />

      <SearchResults songs={searchResults} onAddSong={handleAddSong} />

      <Library songs={library} />
    </div>
  );
}

export default App;


