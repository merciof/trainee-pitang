import React from "react";
import DatePicker from "react-datepicker";

export function MonthPicker({ startDate, setStartDate }) {
  

  React.useEffect(
    function () {
      console.log(startDate);
    },
    [startDate]
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM"
      showMonthYearPicker

    />
  );
}
