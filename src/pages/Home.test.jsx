import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  test("Successfully rendered Home Page", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
});
