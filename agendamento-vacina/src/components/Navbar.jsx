import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" color="inherit" noWrap>
              Agendamento Vacina
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
