import React from "react";
import { appointmentReducer } from "./appointmentReducer.js";

const AppointmentContext = React.createContext([]);

const storage = localStorage.getItem("appointments")
  ? JSON.parse(localStorage.getItem("appointments"))
  : [];

function AppointmentContextProvider({ children }) {
  const [appointmentContextState, dispatch] = React.useReducer(
    appointmentReducer,
    {
      appointments: storage,
    }
  );

  return (
    <AppointmentContext.Provider value={{ appointmentContextState, dispatch }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export { AppointmentContext, AppointmentContextProvider };
