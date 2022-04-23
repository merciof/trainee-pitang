import React from "react";
import DatePicker from "react-datepicker";

export function MonthPicker({ startDate, setStartDate }) {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM"
      showMonthYearPicker
    />
  );
}
