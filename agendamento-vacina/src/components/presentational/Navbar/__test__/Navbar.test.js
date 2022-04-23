import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Navbar } from "../Navbar.jsx";

describe("Navbar", () => {
  it("should render Navbar text", () => {
    render(
      <BrowserRouter>
        <Navbar text={"navbar text"} />
      </BrowserRouter>
    );

    expect(screen.getByText("navbar text")).toBeInTheDocument();
  });
});
