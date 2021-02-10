import { PersonalVideoSharp } from "@material-ui/icons";
import { useState } from "react";

const placeholder = () => {};

const useAxios = ({ axios }) => {
  const [isLoading, setLoading] = useState(false);

  const makeCall = async ({
    method = "GET",
    url,
    data = null,
    successCb = placeholder,
    errorCb = placeholder,
  }) => {
    const base = {
      method,
      url,
    };
    const config = data ? { ...base, data } : base;

    await axios(config)
      .then((res) => {
        //   setLoading(false);
        successCb(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        const msg = err.response.data.message || err.message;
        errorCb(msg);
        throw new Error();
      });
  };

  return {
    makeCall,
    isLoading,
  };
};

export default useAxios;
