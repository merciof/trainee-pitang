import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Footer } from "../Footer.jsx";

describe("HomePage", () => {
  it("should render footer text", () => {
    render(<Footer text={"footer text"} />);

    expect(screen.getByText("footer text")).toBeInTheDocument();
  });
});
