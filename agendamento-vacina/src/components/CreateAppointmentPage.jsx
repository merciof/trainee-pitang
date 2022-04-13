import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  Button,
  CardHeader,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppointmentDatePicker } from "./AppointmentDatePicker.jsx";
import { BirthdayDatePicker } from "./BirthDayDatePicker.jsx";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";

const initialValues = {
  firstName: "",
  lastName: "",
  occupation: "",
  city: "",
  country: "",
  email: "",
  password: "",
};

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

let validationSchema = Yup.object({
  firstName: Yup.string().min(3, " 3 caracteres").required("Requerido"),
  lastName: Yup.string().min(3, " 3 caracteres").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    // .matches(
    //   lowercaseRegEx,
    //   "Must contain one lowercase alphabetical character!"
    // )
    // .matches(
    //   uppercaseRegEx,
    //   "Must contain one uppercase alphabetical character!"
    // )
    // .matches(numericRegEx, "Must contain one numeric character!")
    // .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
});

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export function CreateAppointmentPage() {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
    },
    //validationSchema: validationSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));

      values = { ...values, appointmentDate, birthDay };

      console.log(values);
    },
  });

  const [appointmentDate, setappointmentDate] = React.useState(new Date());

  const [birthDay, setBirthDay] = React.useState(new Date());

  const classes = useStyle();

  return (
    <React.Fragment>
      <Navbar />
      <Grid container justify="center">
        <Grid item md={6}>
          <Card className={classes.padding}>
            <CardHeader title="REGISTER FORM"></CardHeader>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="nome"
                name="nome"
                label="nome"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              data agendamento
              <AppointmentDatePicker
                startDate={appointmentDate}
                setStartDate={setappointmentDate}
              />
              data nascimento
              <BirthdayDatePicker
                startDate={birthDay}
                setStartDate={setBirthDay}
              />
              horario agendamento
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submeter
              </Button>
            </form>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
