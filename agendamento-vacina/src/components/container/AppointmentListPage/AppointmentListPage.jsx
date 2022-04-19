import React from "react";
import { Navbar } from "../Navbar.jsx";
import { appointmentService } from "../../../service/appointmentService.js";
import { MonthPicker } from "../MonthPicker.jsx";
import {
  Grid,
  makeStyles,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import AppointmentsTable from "../AppointmentsTable.jsx";
import { FilterDatePicker } from "../FilterDatePicker.jsx";
import { AppointmentDatePicker } from "../presentational/AppointmentDatePicker.jsx";

const useStyles = makeStyles((theme) => ({
  margintb: {
    marginBottom: 20,
    marginTop: 10,
  },
}));

export function AppointmentListPage() {
  const classes = useStyles();

  const [month, setMonth] = React.useState(null);
  const [dayMonth, setDayMonth] = React.useState(null);
  const [dayMonthHour, setDayMonthHour] = React.useState(null);
  const [appointments, setAppointments] = React.useState([]);

  React.useEffect(function getAllAppointments() {
    appointmentService.index().then((r) => setAppointments(r.data));
  }, []);

  React.useEffect(
    function getAppointmentsByMonth() {
      if (month)
        appointmentService
          .getAppointmentsByMonth({ appointmentDate: month })
          .then((r) => setAppointments(r.data));
    },
    [month]
  );

  React.useEffect(
    function getAppointmentsByDayMonth() {
      if (dayMonth)
        appointmentService
          .getAppointmentsByDay({ appointmentDate: dayMonth })
          .then((r) => setAppointments(r.data));
    },
    [dayMonth]
  );

  React.useEffect(
    function getAppointmentsByDayMonthHour() {
      if (dayMonthHour)
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
        <Grid container>
          <Grid item md={4} className={classes.margintb}>
            <Typography variant="subtitle1" gutterBottom>
              Filtrar por mês dia e hora
            </Typography>

            <AppointmentDatePicker
              startDate={dayMonthHour}
              setStartDate={setDayMonthHour}
            />
          </Grid>

          <Grid item md={4} className={classes.margintb}>
            <Typography variant="subtitle1" gutterBottom>
              Filtrar por mês e dia
            </Typography>

            <FilterDatePicker startDate={dayMonth} setStartDate={setDayMonth} />
          </Grid>

          <Grid item md={4} className={classes.margintb}>
            <Typography variant="subtitle1" gutterBottom>
              Filtrar por mês
            </Typography>

            <MonthPicker startDate={month} setStartDate={setMonth} />
          </Grid>
        </Grid>

        <AppointmentsTable appointments={appointments} />
      </Container>
    </React.Fragment>
  );
}