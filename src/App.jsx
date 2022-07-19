import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Categorias from "./components/Categorias";
import ListFighters from "./components/ListFighters";
import ButtonCargarMas from "./components/ButtonCargarMas";

import { Fighter } from "./data/fighter";

function App() {
  const [listFighters, setListFighters] = useState([]);
  const [listFightersFiltered, setListFightersFiltered] = useState([]);
  const [totalListFighters, setTotalListFighters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoria, setCategoria] = useState("");

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

  useEffect(() => {
    let listaPorCategoria;
    if (categoria === "mujeres") {
      listaPorCategoria = totalListFighters.filter((fighter) =>
        fighter.categoria.includes("Women")
      );
    } else if (categoria === "hombres") {
      listaPorCategoria = totalListFighters.filter(
        (fighter) => !fighter.categoria.includes("Women")
      );
    } else {
      listaPorCategoria = totalListFighters;
    }
    setListFightersFiltered(listaPorCategoria);
    setListFighters(listaPorCategoria.slice(0, 20));
  }, [categoria]);

  const cargarMas = () => {
    const quantityFighters = listFighters.length;
    const quantityFightersInView = quantityFighters + 20;
    setListFighters(listFightersFiltered.slice(0, quantityFightersInView));
  };

  return (
    <div className="content-main-fighters">
      <NavBar></NavBar>

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Categorias
            categoria={categoria}
            setCategoria={setCategoria}
          ></Categorias>
          <ListFighters listFighters={listFighters}></ListFighters>
        </>
      )}

      <ButtonCargarMas cargarMas={cargarMas}></ButtonCargarMas>
    </div>
  );
}

export default App;
