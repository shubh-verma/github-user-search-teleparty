import axios from "axios";
import { token, baseURL } from "../utills/constants";

async function apiCall(input) {
  let queryURL = `${baseURL}?q=fullname:${input}&sort=followers&auth=${token}`;

  try {
    const response = await axios.get(queryURL, { auth: token });
    // console.log(response);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
}

export default apiCall;
