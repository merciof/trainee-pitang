import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

registerLocale("ptBR", ptBR);

export function AppointmentDatePicker({ startDate, setStartDate }) {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      locale={"ptBR"}
      dateFormat="dd/MM/yyyy"
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}
      //dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
}
