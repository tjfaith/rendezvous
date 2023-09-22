import axios from "axios";

export default axios.create({
  baseURL: "https://rendezvous-events.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
