import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import ListFighters from "./components/ListFighters";

import { Fighter } from "./data/fighter";

function App() {
  const [listFighters, setListFighters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "../assets/ufcFighters.json";
      const result = await fetch(url);
      const fighters = await result.json();
      const listsModelsFighters = fighters.map((fighter, index) => {
        return new Fighter(
          fighter.nombre,
          fighter.apodo,
          fighter.categoria,
          fighter.record,
          fighter.imagen,
          index
        );
      });
      setListFighters(listsModelsFighters);
    };
    fetchData();
  }, []);

  return (
    <div className="content-main-fighters">
      <NavBar></NavBar>
      <ListFighters listFighters={listFighters}></ListFighters>
    </div>
  );
}

export default App;
