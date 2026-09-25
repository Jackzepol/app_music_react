

import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Header from "./index";
import { TestProviders } from "../../tests/TestProviders";

const mockStore = configureStore([]);
const store = mockStore({});

describe("Header Component", () => {
  test("muestra el título de la app", () => {
    render(
      <TestProviders store={store}>
        <Header />
      </TestProviders>
    );

    expect(screen.getByText("Mi Biblioteca Musical")).toBeInTheDocument();
  });
});