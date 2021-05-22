import axios from "axios";

const instance = axios.create({
  baseURL: "https://pranav-tinder-backend.herokuapp.com/",
});

export default instance;
