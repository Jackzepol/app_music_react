
jest.mock("../../redux/slices/searchSlice", () => ({
  fetchSongs: jest.fn((query) => ({ type: "search/fetchSongs", payload: query }))
}));

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import SearchBar from "./index";
import { fetchSongs } from "../../redux/slices/searchSlice";
import { TestProviders } from "../../tests/TestProviders";

const mockStore = configureStore([]);

const theme = {
  spacing: {
    md: "16px",
    lg: "24px"
  }
};

describe("SearchBar Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      search: { results: [], loading: false, error: null }
    });
    store.dispatch = jest.fn();
  });

  test("debe ejecutar dispatch(fetchSongs) al hacer clic en Buscar", () => {
      render(
        <TestProviders store={store}>
          <SearchBar />
        </TestProviders>
    );

    const input = screen.getByPlaceholderText("Buscar artista...");
    fireEvent.change(input, { target: { value: "queen" } });

    fireEvent.click(screen.getByText("Buscar"));

    expect(store.dispatch).toHaveBeenCalledWith(fetchSongs("queen"));
  });
});

