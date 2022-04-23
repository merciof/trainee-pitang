import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  TextField,
  Paper,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

import { AppointmentDatePicker } from "../../presentational/Pickers/AppointmentDatePicker";
import { BirthdayDatePicker } from "../../presentational/Pickers/BirthDayDatePicker";
import { Navbar } from "../../presentational/Navbar";

import { appointmentService } from "../../../services/appointmentService";

let validationSchema = Yup.object({
  name: Yup.string().min(3, " mínimo de 3 caracteres").required("Requerido"),
});

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
  marginb: {
    marginBottom: 10,
  },
  margint: {
    marginTop: 10,
  },
}));

export function CreateAppointmentPage() {
  const [appointmentDate, setappointmentDate] = React.useState(new Date());
  const [birthDay, setBirthDay] = React.useState(new Date());
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));

      values = { ...values, appointmentDate, birthDay };

      appointmentService
        .create(values)
        .then((r) => alert(`Agendamento realizado para ${r.data.name}.`))
        .catch((error) => alert(error.response.data));
    },
  });

  return (
    <React.Fragment>
      <Navbar />
      <Grid container justifyContent="center" className={classes.margint}>
        <Grid item md={6}>
          <Paper className={classes.padding} elevation={3}>
            <Typography variant="h6">Formulario de Agendamento</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Grid item container md={12}>
                <Grid item className={classes.marginb} md={6}>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="nome"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item className={classes.marginb} md={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    Data Agendamento
                  </Typography>
                  <AppointmentDatePicker
                    startDate={appointmentDate}
                    setStartDate={setappointmentDate}
                  />
                </Grid>
                <Grid item className={classes.marginb} md={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    Data Nascimento
                  </Typography>
                  <BirthdayDatePicker
                    startDate={birthDay}
                    setStartDate={setBirthDay}
                  />
                </Grid>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  disabled={formik.errors.name}
                >
                  Submeter
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
