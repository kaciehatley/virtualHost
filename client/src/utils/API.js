import axios from "axios";

export default {
  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  validSignup: function(term) {
    return axios.post("/api/users/validate", term)
  }, 
  loginUser: function(user) {
    return axios.post("/api/users/login", user);
  },
  findUserById: function(id) {
    console.log("test");
    return axios.get("/api/users/findbyid/" + id, id)
  },
  updateNotes: function(obj) {
    return axios.put("/api/users/update/notes", obj)
  },
  updateFavs: function(obj) {
    return axios.put("/api/users/update/favs", obj)
  },
  getDashboard: function(id) {
    return axios.get("/api/dash/loaddashboard", id);
  },
  searchVendor: function(term) {
    return axios.get("/api/vendors/search", term);
  },
  allVendors: function() {
    console.log("test");
    return axios.get("/api/vendors/all")    
  },
  findVendorByHost: function() {
    return axios.get("/api/vendors/byhost");
  },
  findVendor: function(id) {
    console.log("test");
    return axios.get("/api/vendors/vendor", id)
  },
  createVendor: function(obj) {
    return axios.post("/api/vendors/create", obj);
  },
  allEvents: function() {
    return axios.get("/api/events/all");
  },
  allEventsByUser: function(id) {
    return axios.get("/api/events/byuser/" + id, id);
  },
  createEvent: function(obj) {
    return axios.post("/api/events/create", obj);
  },
  findEventByID: function(term) {
    console.log("testeventbyid")
    return axios.get("/api/events/find/" + term , term)
  },  
  registerBeacon: function(term) {
    return axios.post("/api/beacons/register", term);
  }
};
