import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import { CreateAppointmentPage } from "../CreateAppointmentPage.jsx";

describe("CreateAppointmentPage", () => {
  it("should render 'formulario de agendamento' heading", () => {
    render(
      <BrowserRouter>
        <CreateAppointmentPage />
      </BrowserRouter>
    );
    const heading = screen.getByRole("heading", {
      name: /formulario de agendamento/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("should render 'nome' input", () => {
    render(
      <BrowserRouter>
        <CreateAppointmentPage />
      </BrowserRouter>
    );
    const textbox = screen.getByRole("textbox", { name: /nome/i });
    expect(textbox).toBeInTheDocument();
  });

  it("should render 'data nascimento' input", () => {
    render(
      <BrowserRouter>
        <CreateAppointmentPage />
      </BrowserRouter>
    );
    const birthDayInput = screen.getByPlaceholderText(/data nascimento/i);
    expect(birthDayInput).toBeInTheDocument();
  });

  it("should render 'data agendamento' input", () => {
    render(
      <BrowserRouter>
        <CreateAppointmentPage />
      </BrowserRouter>
    );
    const appointmentDateInput =
      screen.getByPlaceholderText(/data agendamento/i);
    expect(appointmentDateInput).toBeInTheDocument();
  });

  it("should render 'submeter' button", () => {
    render(
      <BrowserRouter>
        <CreateAppointmentPage />
      </BrowserRouter>
    );
    const button = screen.getByText(/submeter/i);

    expect(button).toBeInTheDocument();
  });
});
