

import searchReducer, { resetResults } from "./searchSlice";
import { fetchSongs } from "./searchSlice";

describe("searchSlice", () => {
  test("resetResults limpia resultados y error", () => {
    const initialState = {
      results: [{ idTrack: "1" }],
      loading: false,
      error: "Error",
    };

    const result = searchReducer(initialState, resetResults());

    expect(result.results).toEqual([]);
    expect(result.error).toBe(null);
  });

  test("fetchSongs.pending activa loading", () => {
    const action = { type: fetchSongs.pending.type };
    const initialState = { results: [], loading: false, error: null };

    const result = searchReducer(initialState, action);

    expect(result.loading).toBe(true);
    expect(result.error).toBe(null);
  });

  test("fetchSongs.fulfilled guarda resultados", () => {
    const action = {
      type: fetchSongs.fulfilled.type,
      payload: [{ idTrack: "1" }],
    };

    const initialState = { results: [], loading: true, error: null };

    const result = searchReducer(initialState, action);

    expect(result.loading).toBe(false);
    expect(result.results.length).toBe(1);
  });

  test("fetchSongs.rejected guarda error", () => {
    const action = {
      type: fetchSongs.rejected.type,
      payload: "Error API",
    };

    const initialState = { results: [], loading: true, error: null };

    const result = searchReducer(initialState, action);

    expect(result.loading).toBe(false);
    expect(result.error).toBe("Error API");
  });
});
