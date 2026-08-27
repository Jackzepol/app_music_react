
import React from "react";
import { SearchBarContainer, Input, Button } from "./styles";


const SearchBar = ({ inputValue, setInputValue, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar artista..."
      />

      <Button onClick={onSearch}>Buscar</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
