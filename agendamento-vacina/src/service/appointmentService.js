import axios from "axios";

const API_URL = "http://localhost:8080/api/appointment/";

const appointmentService = {
  index: function () {
    return axios.get(API_URL);
  },
  create: function (body) {
    return axios.post(API_URL, body);
  },
  read: function (id) {
    return axios.get(API_URL + id);
  },
  getAppointmentsByMonth: function (body) {
    return axios.post("http://localhost:8080/api/getAppointmentsByMonth", body);
  },
  getAppointmentsByDay: function (body) {
    return axios.post("http://localhost:8080/api/getAppointmentsByDay", body);
  },
  getAppointmentsByHour: function (body) {
    return axios.post("http://localhost:8080/api/getAppointmentsByHour", body);
  },
};

export { appointmentService };
