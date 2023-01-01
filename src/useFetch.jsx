import { useState, useEffect } from "react";
import paginate from "./utils";

export const useFetch = (url) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);

  const fetchPerson = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const followers = await response.json();
      setFollowers(paginate(followers)[page]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson(url);
  }, [page]);

  return { setPage, loading, followers, page };
};
export default useFetch;
