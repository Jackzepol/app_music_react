

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const mockStore = configureStore([]);

describe("App Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      search: { results: [], loading: false, error: null },
      library: { songs: [] },
    });
  });

  test("renderiza Header y Home en la ruta /", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Mi Biblioteca Musical")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar artista...")).toBeInTheDocument();
    expect(screen.getByText("Mi biblioteca")).toBeInTheDocument();
  });

  test("renderiza SongDetail en la ruta /song/:albumId", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/song/123"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Cargando detalles...")).toBeInTheDocument();
  });
});