

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Library from "./index";
import { removeSong } from "../../redux/slices/librarySlice";
import { TestProviders } from "../../tests/TestProviders";


const mockStore = configureStore([]);

jest.mock("../../redux/slices/librarySlice", () => ({
  removeSong: jest.fn(),
}));

describe("Library Component", () => {
  let store;

  test("muestra mensaje cuando no hay canciones", () => {
    store = mockStore({ library: { songs: [] } });

    render(
      <TestProviders store={store}>
        <Library />
      </TestProviders>
  );

    expect(screen.getByText("No has agregado canciones aún.")).toBeInTheDocument();
  });

  test("muestra canciones y permite quitarlas", () => {
    store = mockStore({
      library: {
        songs: [
          {
            idAlbum: "2110232",
            strTrack: "Master of Puppets",
            strArtist: "Metallica",
            intDuration: "518293",
          },
        ],
      },
    });

    store.dispatch = jest.fn();

    render(
      <TestProviders store={store}>
        <Library />
      </TestProviders>
    );

    expect(screen.getByText("Master of Puppets")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Quitar de mi biblioteca"));

    expect(removeSong).toHaveBeenCalledWith("2110232");
    expect(store.dispatch).toHaveBeenCalled();
  });
});
