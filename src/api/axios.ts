import Axios from "axios";
import { HTTP_METHODS } from "../globals";

const axios = Axios.create({
  baseURL: "",
});

export const createApiRequest = async (
  url: string,
  method: HTTP_METHODS,
  data: any
) => {
  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export default axios;
