import React from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";

registerLocale("ptBR", ptBR);

export function FilterDatePicker({ startDate, setStartDate }) {
  return (
    <DatePicker
      locale={"ptBR"}
      dateFormat="dd/MM"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}
