import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios(url);

        if (isMounted && data) {
          setLoading(false);
          setData(data);
        }
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
