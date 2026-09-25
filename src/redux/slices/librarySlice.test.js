

import libraryReducer, { addSong, removeSong } from "./librarySlice";

describe("librarySlice", () => {
  test("addSong agrega una canción si no existe", () => {
    const initialState = { songs: [] };
    const newSong = { idAlbum: "1", strTrack: "Song" };

    const result = libraryReducer(initialState, addSong(newSong));

    expect(result.songs.length).toBe(1);
    expect(result.songs[0]).toEqual(newSong);
  });

  test("addSong NO agrega una canción duplicada", () => {
    const initialState = { songs: [{ idAlbum: "1" }] };
    const newSong = { idAlbum: "1" };

    const result = libraryReducer(initialState, addSong(newSong));

    expect(result.songs.length).toBe(1);
  });

  test("removeSong elimina una canción por idAlbum", () => {
    const initialState = { songs: [{ idAlbum: "1" }] };

    const result = libraryReducer(initialState, removeSong("1"));

    expect(result.songs.length).toBe(0);
  });
});
