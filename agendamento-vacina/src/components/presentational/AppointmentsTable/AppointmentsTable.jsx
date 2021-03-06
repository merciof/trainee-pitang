import * as React from "react";
import { DataGrid, ptBR } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import moment from "moment";
import "moment/locale/pt-br.js";

import { appointmentService } from "../../../services/appointmentService";

const columns = [
  {
    field: "name",
    headerName: "Nome",
    width: 150,
  },
  {
    field: "appointmentDate",
    headerName: "Data Agendamento",
    width: 200,
  },
  {
    field: "birthDay",
    headerName: "Data Nascimento",
    width: 200,
  },
  {
    field: "hour",
    headerName: "Horário",
    width: 200,
  },
  {
    field: "accomplished",
    headerName: "Realizado",
    width: 200,
    renderCell: function (params) {
      const api = params.api;

      function handleClick(e) {
        // atualizar o agendamento no servidor para accomplished true
        // alterar a exibição da coluna para "Realizado"

        appointmentService.put({ accomplished: true }, params.row.id);

        params.row.accomplished = true;
      }

      if (params.row.accomplished === false)
        return (
          <Button variant="outlined" onClick={handleClick}>
            Confirmar
          </Button>
        );
      else return "Sim";
    },
  },
];

export function AppointmentsTable({ appointments }) {
  const [appointmentsWithIdState, setAppointmentsWithIdState] = React.useState(
    []
  );

  let appointmentsWithId = [];

  React.useEffect(function () {
    moment.locale("pt-br");
  }, []);

  // this effect is used to generate a new array of appointments structured as required
  // to be presented by the DataGrid component
  React.useEffect(
    function createAppointmentsArrayWithId() {
      appointments.forEach(function (appointment) {
        appointmentsWithId.push({
          ...appointment,
          id: appointment._id,
          appointmentDate: moment(appointment.appointmentDate).format("LL"),
          birthDay: moment(appointment.appointmentDate).format("L"),
          accomplished: appointment.accomplished,
          hour: new Date(appointment.appointmentDate).getHours() + "h",
        });
      });

      setAppointmentsWithIdState(appointmentsWithId);
    },
    [appointments]
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        localeText={ptBR.props.MuiDataGrid.localeText}
        rows={appointmentsWithIdState}
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}
