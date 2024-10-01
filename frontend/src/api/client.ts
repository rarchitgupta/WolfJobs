import axios from "axios";

const client = axios.create({ baseURL: "https://wolfjobs.onrender.com" });

export default client;
