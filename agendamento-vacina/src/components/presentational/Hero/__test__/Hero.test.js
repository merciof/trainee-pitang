import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Hero } from "../Hero.jsx";

describe("Hero", () => {
  it("should render Hero fields", () => {
    render(
      <BrowserRouter>
        <Hero
          majorText={"majorText"}
          leftButtonText={"leftButtonText"}
          rightButtonText={"rightButtonText"}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("leftButtonText")).toBeInTheDocument();
    expect(screen.getByText("majorText")).toBeInTheDocument();
    expect(screen.getByText("rightButtonText")).toBeInTheDocument();
  });
});
