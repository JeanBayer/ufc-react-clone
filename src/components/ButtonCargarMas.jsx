import PropTypes from "prop-types";

const ButtonCargarMas = ({ cargarMas }) => {
  return (
    <div className="container-button-cargar-mas">
      <button onClick={cargarMas}>Carga Más</button>
    </div>
  );
};

ButtonCargarMas.propTypes = {
  cargarMas: PropTypes.func.isRequired,
};

export default ButtonCargarMas;
