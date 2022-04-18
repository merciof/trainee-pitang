import React from "react";
import { CreateAppointmentPage } from "./components/CreateAppointmentPage.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppointmentListPage } from "./components/AppointmentListPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/createAppointment"} component={CreateAppointmentPage} />
        <Route path={"/appointmentList"} component={AppointmentListPage} />
        <Route Route path={"/"} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
