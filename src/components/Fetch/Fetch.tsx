import { useState, useEffect } from "react";

const Fetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const response = await fetch(url);
      const datas = await response.json();
      setData(datas);
      setLoading(false);
    } catch (e) {
      console.log("Error fetching data!");
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { data, loading };
};

export default Fetch;
