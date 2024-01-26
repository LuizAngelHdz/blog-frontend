import { useState } from "react";
import axios from "axios";

const useApi = ({ endpoint, method }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = process.env.REACT_APP_MAIN_BACKEND_URL;

  /**
   * The `handleFetch` function is an asynchronous function that makes a request to a backend API using
   * the axios library, and updates the state variables `loading`, `data`, and `error` based on the
   * response.
   * @param properties - The `properties` parameter is an object that contains various properties for the
   * fetch request. It can have the following properties:
   */
  const handleFetch = async (properties) => {
    setLoading(true);
    let url = `${backendUrl}${endpoint}${
      properties?.urlParams ? `/${properties?.urlParams}` : ""
    }`;
    const dataSend = properties?.body ? properties.body : {};

    await axios[method](url, dataSend)
      .then(
        (response) => {
          console.log("response", response);
          setData(response.data);
        },
        (error) => {
          setError(error);
          console.error(error);
        }
      )
      .finally(setLoading(false));
  };

  return [handleFetch, data, error, loading];
};

export default useApi;
