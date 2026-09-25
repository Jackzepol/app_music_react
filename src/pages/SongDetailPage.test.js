

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import SongDetailPage from "./SongDetailPage";

describe("SongDetailPage", () => {
  test("renderiza SongDetail dentro de la página", () => {
    render(
      <MemoryRouter initialEntries={["/song/123"]}>
        <Routes>
          <Route path="/song/:albumId" element={<SongDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Cargando detalles...")).toBeInTheDocument();
  });
});
