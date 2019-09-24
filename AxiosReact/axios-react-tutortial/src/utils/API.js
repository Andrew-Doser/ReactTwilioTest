//utils/API.js

import axios from "axios";

export default axios.create({
  //baseURL: "https://randomuser.me/api/",
  baseURL: "http://c344704f.ngrok.io",
  responseType: "json"
});