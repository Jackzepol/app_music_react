

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import SongDetail from "./index";

// Mock global fetch
global.fetch = jest.fn();

describe("SongDetail Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("muestra mensaje de carga inicialmente", () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ album: [] })
    });

    render(
      <MemoryRouter initialEntries={["/song/123"]}>
        <Routes>
          <Route path="/song/:albumId" element={<SongDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Cargando detalles...")).toBeInTheDocument();
  });

  test("muestra mensaje de error cuando no hay información", async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ album: null })
    });

    render(
      <MemoryRouter initialEntries={["/song/123"]}>
        <Routes>
          <Route path="/song/:albumId" element={<SongDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("No se encontró información.")).toBeInTheDocument();
    });
  });

  test("muestra mensaje de error cuando fetch falla", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    render(
      <MemoryRouter initialEntries={["/song/123"]}>
        <Routes>
          <Route path="/song/:albumId" element={<SongDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Error al cargar los detalles.")).toBeInTheDocument();
    });
  });

  test("muestra detalles del álbum correctamente", async () => {
    fetch.mockResolvedValueOnce({
      json: () =>
        Promise.resolve({
          album: [
            {
              strAlbum: "Master of Puppets",
              strArtist: "Metallica",
              intYearReleased: "1986"
            }
          ]
        })
    });

    render(
      <MemoryRouter initialEntries={["/song/2110232"]}>
        <Routes>
          <Route path="/song/:albumId" element={<SongDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Evita el error por texto duplicado
    const titles = await screen.findAllByText("Master of Puppets");
    expect(titles.length).toBeGreaterThan(0);

    expect(await screen.findByText("Metallica")).toBeInTheDocument();
    expect(await screen.findByText("1986")).toBeInTheDocument();
  });
});