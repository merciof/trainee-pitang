import React from "react";
import { Footer } from "./Footer.jsx";
import { Hero } from "./Hero.jsx";
import { Navbar } from "./Navbar.jsx";

export function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Footer text={"agendamento Vacina"} />
    </React.Fragment>
  );
}
