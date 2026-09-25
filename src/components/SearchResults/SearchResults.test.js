
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import SearchResults from "./index";
import { addSong } from "../../redux/slices/librarySlice";
import { TestProviders } from "../../tests/TestProviders"; 

const mockStore = configureStore([]);

describe("SearchResults Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      search: {
        results: [
          {
            idTrack: "1",
            strTrack: "Song 1",
            idAlbum: "123",
            strArtist: "Queen",
            intDuration: "180"
          }
        ],
        loading: false,
        error: null
      },
      library: {
        songs: []
      }
    });

    store.dispatch = jest.fn();
  });

  test("debe renderizar resultados y permitir agregar canción", () => {
    render(
      <MemoryRouter>
        <TestProviders store={store}>
          <SearchResults />
        </TestProviders>
      </MemoryRouter>
    );

    expect(screen.getByText("Resultados de búsqueda")).toBeInTheDocument();
    expect(screen.getByText("Song 1")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /agregar/i }));

    expect(store.dispatch).toHaveBeenCalledWith(
      addSong({
        idAlbum: "123",
        strTrack: "Song 1",
        strArtist: "Queen",
        strAlbum: undefined,
        intDuration: "180"
      })
    );
  });
});
