# trainee-pitang

[MIT License](./LICENSE) © [Mércio Filho](https://github.com/merciof)



## :bulb: Introduction 

This project is a Single Page Application for the creation of vaccine appointments.

## :tada: Technologies

This project uses the following technologies

- :zap: **Create React App** -> For rapid React project setup.
- :zap: **React Router Dom** -> For SPA routes.
- :zap: **React Hooks** -> useState, useReducer, useContext, For state management.
- :zap: **React Functional Components** -> To describe the UI components.
- :zap: **Material UI** -> For beautiful components. 
- :zap: **Axios** -> To request data over the network.
- :zap: **Formik** -> For rapid and clean forms.
- :zap: **Yup** -> For field validation.
- :zap: **React DatePicker** -> To nicely pick date, month and hour.
- :zap: **MomentJS** -> For nice visualization of dates.
- :zap: **React Testing Library** -> For frontend tests.

## :house: Getting started

1. Clone this repo.
2. Install the packages using your favorite package manager ( yarn install or npm install ).
3. Rename the file config/config.example.js to config/config.js, and add the API_URL value. 
4. Open the browser on: `http://localhost:3000`
5. The backend must be on too.

## :ticket: About the project

The project screens as follow: 

The Home Page:

![Homepage](https://i.imgur.com/aKMOVfl.png)

The Appointment Form:

![CreateAppointmentPage](https://i.imgur.com/cwBIMX2.png)

Validation of required field, error message and button disabled:

![CreateAppointmentPage](https://i.imgur.com/Hi7rwSH.png)

Past dates are not shown for appointment:

![CreateAppointmentPage](https://i.imgur.com/1WtJd3h.png)

Required Datepicker field.

![CreateAppointmentPage](https://i.imgur.com/Fc0fdCi.png)

Success message received from the server:

![CreateAppointmentPage](https://i.imgur.com/OuvSox1.png)

Error message received from the server:

![CreateAppointmentPage](https://i.imgur.com/4dND1pp.png)

Appointments view, Pagination and three filter options: 

![AppointmentsListPage](https://i.imgur.com/g8OTKni.png)

Order by table Field:

![AppointmentsListPage](https://i.imgur.com/CDqZqRF.png)

Dumb data example:

![AppointmentsListPage](https://i.imgur.com/xkNSGja.png)

ps: The appointments data on the table is not lost if you refresh the page. It is saved on localStorage via contextApi and useReducer.
















