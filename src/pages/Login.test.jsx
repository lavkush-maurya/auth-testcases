import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginPage from "./Login";
import { MemoryRouter } from "react-router-dom";

describe("LoginPage", () => {
  test("Successfully rendered Login Page", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  });
  test("displays error message for invalid email format", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const emailInput = getByTestId("email");
    const loginButton = getByTestId("loginBtn");
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.click(loginButton);
    const errorMessage = getByText("Invalid email format");
    expect(errorMessage).toBeInTheDocument(/Invalid email format/);
  });
  test("displays error message for invalid password format", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    const passwordInput = getByTestId("password");
    const loginButton = getByTestId("loginBtn");
    fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
    fireEvent.click(loginButton);
    const errorMessage = getByTestId("error");
    expect(errorMessage).toBeInTheDocument(
      /Password should have at least 8 characters with 1 capital letter and 1 number/
    );
  });
});
