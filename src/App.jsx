import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import ListFighters from "./components/ListFighters";
import ButtonCargarMas from "./components/ButtonCargarMas";

import { Fighter } from "./data/fighter";

function App() {
  const [listFighters, setListFighters] = useState([]);
  const [totalListFighters, setTotalListFighters] = useState([]);

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
          fighter.imagenTrasera,
          fighter.url,
          fighter.url2,
          fighter.url3,
          index
        );
      });
      setTotalListFighters(listsModelsFighters);
      setListFighters(totalListFighters.slice(0, 20));
    };
    fetchData();
  }, []);

  return (
    <div className="content-main-fighters">
      <NavBar></NavBar>
      <div className="principal-section">
        <ListFighters listFighters={listFighters}></ListFighters>
        <ButtonCargarMas></ButtonCargarMas>
      </div>
    </div>
  );
}

export default App;
