import PropTypes from "prop-types";

const Categorias = ({ categoria, setCategoria }) => {
  const handleClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <div className="section-categorias">
      <nav className="section-categorias-nav">
        <ul
          className={`${
            categoria === "" ? "resaltado" : ""
          } section-categorias-nav-ul`}
          onClick={(e) => handleClick("")}
        >
          -cualquiera-
        </ul>
        <ul
          className={`${
            categoria === "mujeres" ? "resaltado" : ""
          } section-categorias-nav-ul`}
          onClick={(e) => handleClick("mujeres")}
        >
          mujeres
        </ul>
        <ul
          className={`${
            categoria === "hombres" ? "resaltado" : ""
          } section-categorias-nav-ul`}
          onClick={(e) => handleClick("hombres")}
        >
          hombres
        </ul>
      </nav>
      <div className="section-categorias-informacion">
        <div></div>
        <p>2603 ATHLETES</p>
        <input
          className="section-categorias-informacion-input"
          placeholder="Busqueda de Atletas"
        ></input>
      </div>
    </div>
  );
};

Categorias.propTypes = {
  categoria: PropTypes.string.isRequired,
  setCategoria: PropTypes.func.isRequired,
};

export default Categorias;
