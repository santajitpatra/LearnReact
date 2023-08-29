import { useEffect } from "react";
import { useGlobalContext } from "../context/contextNews";

const Stories = () => {
    // let isLoading = true;
    const name = useGlobalContext()

  let API = "http://hn.algolia.com/api/v1/search?query=html";

  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthApiData(API);
  }, []);

  return <div>Stories - {name}</div>;
};

export default Stories;
