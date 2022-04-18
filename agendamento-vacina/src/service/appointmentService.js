import axios from "axios";

const URL = "http://localhost:8080/api/appointment/";

const appointmentService = {
  index: function () {
    return axios.get("http://localhost:8080/api/appointment/");
  },
  create: function (body) {
    return axios.post("http://localhost:8080/api/appointment/", body);
  },
  read: function (id) {
    return axios.get("http://localhost:8080/api/appointment/" + id);
  },
  getAppointmentsByMonth: function (body) {
    return axios.post("http://localhost:8080/api/getAppointmentsByMonth", body);
  },
};

export { appointmentService };
