function store(appointments) {
  localStorage.setItem(
    "appointments",
    JSON.stringify(appointments.length > 0 ? appointments : [])
  );
}

export function appointmentReducer(state, action) {
  switch (action.type) {
    case "UPDATE_APPOINTMENTS":
      store(action.payload);
      return { appointments: [...action.payload] };
  }
}
