

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Song from "./index";

describe("Song Component", () => {
  test("renderiza título, artista y duración", () => {
    render(
      <Song
        title="Master of Puppets"
        artist="Metallica"
        duration="518293"
      />
    );

    expect(screen.getByText("Master of Puppets")).toBeInTheDocument();
    expect(screen.getByText("Artista: Metallica")).toBeInTheDocument();
    expect(screen.getByText("Duración: 518293")).toBeInTheDocument();
  });

  test("ejecuta onAdd cuando se hace clic en agregar", () => {
    const handleAdd = jest.fn();

    render(
      <Song
        title="Song"
        artist="Artist"
        duration="123"
        onAdd={handleAdd}
      />
    );

    fireEvent.click(screen.getByText("Agregar a mi biblioteca"));
    expect(handleAdd).toHaveBeenCalled();
  });

  test("ejecuta onRemove cuando se hace clic en quitar", () => {
    const handleRemove = jest.fn();

    render(
      <Song
        title="Song"
        artist="Artist"
        duration="123"
        onRemove={handleRemove}
      />
    );

    fireEvent.click(screen.getByText("Quitar de mi biblioteca"));
    expect(handleRemove).toHaveBeenCalled();
  });
});
