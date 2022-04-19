import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import moment from "moment";
import "moment/locale/pt-br.js";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

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
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: "Jon",
    birthDay: "24/12/1989",
    appointmentDate: "18 de abril de 2022",
  },
];

export default function DataTable({ appointments }) {
  const [appointmentsWithIdState, setAppointmentsWithIdState] = React.useState(
    []
  );

  let appointmentsWithId = [];

  React.useEffect(function () {
    moment.locale("pt-br");
  }, []);

  React.useEffect(
    function createAppointmentsArrayWithId() {
      appointments.forEach(function (appointment) {
        appointmentsWithId.push({
          ...appointment,
          id: appointment._id,
          appointmentDate: moment(appointment.appointmentDate).format("LL"),
          birthDay: moment(appointment.appointmentDate).format("L"),
          accomplished: RadioButtonUncheckedIcon,
          hour: new Date(appointment.appointmentDate).getHours() + "h",
        });
      });

      setAppointmentsWithIdState(appointmentsWithId);
    },
    [appointments]
  );

  // fazer filtragem por hora

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={appointmentsWithIdState}
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}
