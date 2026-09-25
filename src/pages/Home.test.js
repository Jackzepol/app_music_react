

import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Home from "./Home";
import { TestProviders } from "../tests/TestProviders";
import { MemoryRouter } from "react-router-dom";

const mockStore = configureStore([]);

describe("Home Page", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      search: { results: [], loading: false, error: null },
      library: { songs: [] },
    });
  });

  test("renderiza SearchBar, SearchResults y Library", () => {
    render(
      <MemoryRouter>
        <TestProviders store={store}>
          <Home />
        </TestProviders>
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("Buscar artista...")).toBeInTheDocument();
    expect(screen.getByText("No hay resultados para mostrar.")).toBeInTheDocument();
    expect(screen.getByText("Mi biblioteca")).toBeInTheDocument();
  });
});
