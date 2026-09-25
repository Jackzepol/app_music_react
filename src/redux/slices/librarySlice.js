


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const exists = state.songs.some(song => song.idAlbum === action.payload.idAlbum);
      if (!exists) state.songs.push(action.payload);
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter(song => song.idAlbum !== action.payload);
    },
  },
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;
