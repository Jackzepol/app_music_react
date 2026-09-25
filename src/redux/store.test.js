

import store from "./store";

describe("Redux Store", () => {
  test("debe inicializar correctamente", () => {
    const state = store.getState();

    expect(state).toHaveProperty("library");
    expect(state).toHaveProperty("search");
  });
});
