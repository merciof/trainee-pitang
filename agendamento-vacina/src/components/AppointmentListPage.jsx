import React from "react";
import { Navbar } from "./Navbar.jsx";
import { appointmentService } from "../service/appointmentService.js";
import { MonthPicker } from "./MonthPicker.jsx";
import {
  Grid,
  makeStyles,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import AppointmentsTable from "./AppointmentsTable.jsx";
import { FilterDatePicker } from "./FilterDatePicker.jsx";
import { AppointmentDatePicker } from "./AppointmentDatePicker.jsx";

export function AppointmentListPage() {
  const [month, setMonth] = React.useState(null);

  const [dayMonth, setDayMonth] = React.useState(null);

  const [dayMonthHour, setDayMonthHour] = React.useState(null);

  const [appointments, setAppointments] = React.useState([]);

  React.useEffect(
    function getAppointmentsByMonth() {
      appointmentService
        .getAppointmentsByMonth({ appointmentDate: month })
        .then((r) => setAppointments(r.data));
    },
    [month]
  );

  React.useEffect(
    function getAppointmentsByDayAndMonth() {
      appointmentService
        .getAppointmentsByDay({ appointmentDate: dayMonth })
        .then((r) => setAppointments(r.data));
    },
    [dayMonth]
  );

  React.useEffect(
    function () {
      appointmentService
        .getAppointmentsByHour({ appointmentDate: dayMonthHour })
        .then((r) => setAppointments(r.data));
    },
    [dayMonthHour]
  );

  //exibir os dados dos agendamentos em cartões
  //TODO implementar filtros adicionais
  return (
    <React.Fragment>
      <Navbar />

      <Container>
        filtrar por mês
        <MonthPicker startDate={month} setStartDate={setMonth} />
        filtrar por mês e dia
        <FilterDatePicker startDate={dayMonth} setStartDate={setDayMonth} />
        filtrar por mês dia e hora filtrar atendimentos realizados e não
        realizados
        <AppointmentDatePicker
          startDate={dayMonthHour}
          setStartDate={setDayMonthHour}
        />
        <AppointmentsTable appointments={appointments} />
      </Container>
    </React.Fragment>
  );
}
