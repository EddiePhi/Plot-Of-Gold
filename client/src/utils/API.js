// CRUD functionality with MongoDB
import axios from "axios";

// const BASEURL =
// const APIKEY =

const API = {
  //Plot Requests
  postNewPlot: function (plotData) {
    return axios.post("/plot", plotData);
  },
  getPlot: function () {
    return axios.get("/plot");
  },

  getOnePlot: function (id) {
    return axios.get("/plot/" + id);
  },
  deletePlot: function (id) {
    return axios.delete("/plot/" + id);
  },

  //Locations requests
  postLocation: function (id, plotData) {
    return axios.post("/location/" + id, plotData);
  },
  //User/Login/SignUp requests
  postSignUp: function (signUpData) {
    return axios.post("/user", signUpData);
  },
  getUser: function () {
    return axios.get("/user");
  },
  //Plant data requests
  getPlants: function () {
    return axios.get("/plants");
  },
};

export default API;
