import React from "react";
import { Footer } from "../../presentational/Footer";
import { Hero } from "../../presentational/Hero";
import { Navbar } from "../../presentational/Navbar";

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
