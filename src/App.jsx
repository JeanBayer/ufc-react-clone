import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import ListFighters from "./components/ListFighters";
import ButtonCargarMas from "./components/ButtonCargarMas";

import { Fighter } from "./data/fighter";

function App() {
  const [listFighters, setListFighters] = useState([]);
  const [totalListFighters, setTotalListFighters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = "../assets/ufcFighters.json";
      const result = await fetch(url);
      const fighters = await result.json();
      const listsModelsFighters = await fighters.map((fighter, index) => {
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
      setListFighters(listsModelsFighters.slice(0, 20));
      setTotalListFighters(listsModelsFighters);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const cargarMas = () => {
    const quantityFighters = listFighters.length;
    const quantityFightersInView = quantityFighters + 20;
    setListFighters(totalListFighters.slice(0, quantityFightersInView));
  };

  return (
    <div className="content-main-fighters">
      <NavBar></NavBar>

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ListFighters listFighters={listFighters}></ListFighters>
      )}

      <ButtonCargarMas cargarMas={cargarMas}></ButtonCargarMas>
    </div>
  );
}

export default App;
