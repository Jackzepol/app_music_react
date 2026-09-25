

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.theaudiodb.com/api/v1/json/123/track-top10.php?s=${searchTerm}`
      );
      const data = await response.json();
      return data.track || []; // varias canciones
    } catch (error) {
      return rejectWithValue('Error al conectar con la API.');
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Ocurrió un error inesperado';
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;