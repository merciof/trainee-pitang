import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export function Hero({ majorText, leftButtonText, rightButtonText }) {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {majorText}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Link
                to={"/createAppointment"}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" color="primary">
                  {leftButtonText}
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/appointmentList"} style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary">
                  {rightButtonText}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
