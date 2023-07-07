import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
test("renders the App component and verifies the login page link", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const loginPageLink = screen.getByRole("link", { name: "Login Page" });
  expect(loginPageLink).toBeInTheDocument();
});
