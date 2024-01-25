import { useState } from "react";
import axios from "axios";

const useApi = ({ endpoint, method }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const backendUrl = "http://localhost:3008";

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
