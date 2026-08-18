
import React from "react";
import "./styles.css";

const SearchBar = ({ inputValue, setInputValue, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar artista..."
      />

      <button onClick={onSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
