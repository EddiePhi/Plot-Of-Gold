// CRUD functionality with MongoDB
import axios from "axios";

// const BASEURL =
// const APIKEY =

const API = {
  postNewPlot: function (plotData) {
    return axios.post("/plot", plotData);
  },
  getPlot: function () {
    return axios.get("/plot");
  },

  getOnePlot: function (id) {
    return axios.get("/plot/" + id);
  },

  postSignUp: function (signUpData) {
    return axios.post("/user", signUpData);
  },
  getUser: function () {
    return axios.get("/user");
  },
  getPlants: function () {
    return axios.get("/plants");
  },

  // getBooks: function (query) {
  //   return axios.get(BASEURL + query + APIKEY);
  // },

  // saveBook: function (bookData) {
  //   return axios.post("/api/books", bookData);
  // },

  // getSaved: function () {
  //   return axios.get("/api/books");
  // },
  // deleteBook: function (id) {
  //   return axios.delete("/api/books/" + id);
  // },
};

export default API;
