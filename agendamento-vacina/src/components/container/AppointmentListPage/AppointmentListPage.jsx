import React from "react";
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";

import { Navbar } from "../../presentational/Navbar";
import { MonthPicker } from "../../presentational/Pickers/MonthPicker";
import { AppointmentsTable } from "../../presentational/AppointmentsTable";
import { FilterDatePicker } from "../../presentational/Pickers/FilterDatePicker";
import { AppointmentDatePicker } from "../../presentational/Pickers/AppointmentDatePicker";

import { appointmentService } from "../../../services/appointmentService";
import { AppointmentContext } from "../../../contexts/appointment";


const useStyles = makeStyles((theme) => ({
  margintb: {
    marginBottom: 20,
    marginTop: 10,
  },
}));

export function AppointmentListPage() {
  const classes = useStyles();

  const { appointmentContextState, dispatch } = React.useContext(AppointmentContext);

  const [month, setMonth] = React.useState(null);
  const [dayMonth, setDayMonth] = React.useState(null);
  const [dayMonthHour, setDayMonthHour] = React.useState(null);
  //const [appointments, setAppointments] = React.useState([]);

  React.useEffect(function getAllAppointments() {
    if (appointmentContextState.appointments.length === 0)
      appointmentService.index().then((r) => {
        //setAppointments(r.data);
        dispatch({ type: "UPDATE_APPOINTMENTS", payload: r.data });
      });
  }, []);

  React.useEffect(
    function getAppointmentsByMonth() {
      if (month)
        appointmentService
          .getAppointmentsByMonth({ appointmentDate: month })
          .then((r) => dispatch({ type: "UPDATE_APPOINTMENTS", payload: r.data }));
    },
    [month]
  );

  React.useEffect(
    function getAppointmentsByDayMonth() {
      if (dayMonth)
        appointmentService
          .getAppointmentsByDay({ appointmentDate: dayMonth })
          .then((r) => dispatch({ type: "UPDATE_APPOINTMENTS", payload: r.data }));
    },
    [dayMonth]
  );

  React.useEffect(
    function getAppointmentsByDayMonthHour() {
      if (dayMonthHour)
        appointmentService
          .getAppointmentsByHour({ appointmentDate: dayMonthHour })
          .then((r) => dispatch({ type: "UPDATE_APPOINTMENTS", payload: r.data }));
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

        <AppointmentsTable
          appointments={appointmentContextState.appointments}
        />
      </Container>
    </React.Fragment>
  );
}
