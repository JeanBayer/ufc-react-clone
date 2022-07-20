import { useState, useEffect } from "react";

const useFighters = () => {
  const [listFighters, setListFighters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/assets/data/ufcFighters.json");
      const fighters = await data.json();
      const arrayListFighters = fighters.map((fighter, index) => ({
        ...fighter,
        id: index,
      }));
      setListFighters(arrayListFighters);
    };
    fetchData();
  }, []);

  return listFighters;
};

export default useFighters;
