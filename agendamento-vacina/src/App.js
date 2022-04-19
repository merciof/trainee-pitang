import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { CreateAppointmentPage } from "./components/container/CreateAppointmentPage";
import { HomePage } from "./components/container/HomePage";
import { AppointmentListPage } from "./components/container/AppointmentListPage";

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
