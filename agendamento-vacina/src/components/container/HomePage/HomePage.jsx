import React from "react";
import { Footer } from "../../presentational/Footer/Footer.jsx";
import { Hero } from "../Hero.jsx";
import { Navbar } from "../Navbar.jsx";

export function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero
        majorText={"Marque e acompanhe o seu agendamento"}
        leftButtonText={"Agendar"}
        rightButtonText={"Ver Agendamentos"}
      />
      <Footer text={"Agendamento Vacina"} />
    </React.Fragment>
  );
}
