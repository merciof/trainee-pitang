import axios from "axios";

import { API_URL } from "../../config/config.js";

const appointmentService = {
  index: function () {
    return axios.get(API_URL + "appointment/");
  },
  create: function (body) {
    return axios.post(API_URL + "appointment/", body);
  },
  read: function (id) {
    return axios.get(API_URL + "appointment/" + id);
  },
  put: function (body) {
    return axios.put(API_URL + "appointment/", body);
  },
  getAppointmentsByMonth: function (body) {
    return axios.post(API_URL + "getAppointmentsByMonth/", body);
  },
  getAppointmentsByDay: function (body) {
    return axios.post(API_URL + "getAppointmentsByDay", body);
  },
  getAppointmentsByHour: function (body) {
    return axios.post(API_URL + "getAppointmentsByHour", body);
  },
};

export { appointmentService };
