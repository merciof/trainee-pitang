import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { HomePage } from "../index.js";

describe("HomePage", () => {
  it("should render 'AGENDAR' button", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const buttonAgendar = screen.getByRole("button", { name: /agendar/i });
    expect(buttonAgendar).toBeInTheDocument();
  });
});

describe("HomePage", () => {
  it("should render 'VER AGENDAMENTOS' button", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const buttonAgendar = screen.getByRole("button", {
      name: /ver agendamento/i,
    });
    expect(buttonAgendar).toBeInTheDocument();
  });
});

describe("HomePage", () => {
  it("should render 'Agendamento Vacina' heading", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading", {
      name: /agendamento vacina/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
