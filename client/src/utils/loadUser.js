import axios from "axios";
import setAuthToken from "./setAuthToken";

// Load authenticated user
const loadUser = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    setAuthToken(token);
  }

  try {
    const response = await axios.get("/api/v1/users/auth");

    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

export default loadUser;
