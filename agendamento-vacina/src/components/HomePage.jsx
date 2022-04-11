import React from "react";
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";

export function HomePage({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer text={"agendamento Vacina"} />
    </React.Fragment>
  );
}
