


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchBarContainer, Input, Button } from "./styles";
import { fetchSongs } from "../../redux/slices/searchSlice";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (inputValue.trim()) {
      dispatch(fetchSongs(inputValue));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
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
      <Button onClick={handleSearch}>Buscar</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;