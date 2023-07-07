import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignUpPage from "./Signup";

describe("SignUpPage", () => {
  test("Successfully rendered Signup Page", () => {
    render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
  });
  test("displays error message for invalid name format", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const nameInput = getByTestId("name");
    const signupButton = getByTestId("signupBtn");
    fireEvent.change(nameInput, { target: { value: "invalidname" } });
    fireEvent.click(signupButton);
    const errorMessage = getByTestId("error");
    expect(errorMessage).toBeInTheDocument(/Name should be only in letters/);
  });
  test("displays error message for invalid email format", () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const emailInput = getByTestId("email");
    const signupButton = getByTestId("signupBtn");
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    fireEvent.click(signupButton);
    const errorMessage = getByTestId("error");
    expect(errorMessage).toBeInTheDocument(/Invalid email format/);
  });
  test("displays error message for invalid password format", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignUpPage />
      </MemoryRouter>
    );
    const passwordInput = getByTestId("password");
    const signupButton = getByTestId("signupBtn");
    fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });
    fireEvent.click(signupButton);
    const errorMessage = getByTestId("error");
    expect(errorMessage).toBeInTheDocument(
      /Password should have at least 8 characters with 1 capital letter and 1 number/
    );
  });
});
