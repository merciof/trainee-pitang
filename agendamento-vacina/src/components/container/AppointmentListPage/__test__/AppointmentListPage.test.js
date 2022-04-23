import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppointmentListPage } from "../AppointmentListPage.jsx";

describe("Hero", () => {
  it("should render input fields", () => {
    render(<AppointmentListPage />);

    expect(screen.getAllByRole("textbox").length).toBe(3);
  });

  it("should render table header", () => {
    render(<AppointmentListPage apointments={[]} />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
    expect(screen.getByText("Data Agendamento")).toBeInTheDocument();
    expect(screen.getByText("Data Nascimento")).toBeInTheDocument();
    expect(screen.getByText("Horário")).toBeInTheDocument();
    expect(screen.getByText("Realizado")).toBeInTheDocument();
  });
});
