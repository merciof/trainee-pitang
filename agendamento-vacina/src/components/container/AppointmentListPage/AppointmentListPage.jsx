import React from "react";
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";

import { Navbar } from "../../presentational/Navbar";
import { MonthPicker } from "../../presentational/Pickers/MonthPicker";
import { AppointmentsTable } from "../../presentational/AppointmentsTable";
import { FilterDatePicker } from "../../presentational/Pickers/FilterDatePicker";
import { AppointmentDatePicker } from "../../presentational/Pickers/AppointmentDatePicker";

import { appointmentService } from "../../../service/appointmentService.js";
import { appointmentContext } from "../../../contexts/appointmentContext.js";

const useStyles = makeStyles((theme) => ({
  margintb: {
    marginBottom: 20,
    marginTop: 10,
  },
}));

export function AppointmentListPage() {
  const classes = useStyles();

  const appointmentContext = React.useContext(appointmentContext);

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
