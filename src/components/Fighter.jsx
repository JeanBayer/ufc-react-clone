import React from "react";

const Fighter = ({ fighter }) => {
  const { nombre, apodo, categoria, record, imagen } = fighter;
  return (
    <div className="contenedor-fighter-front">
      <div className="contenedor-fighter">
        <div className="contenedor-imagen">
          <img className="imagen-fighter" src={imagen} alt="" />
        </div>
        <div className="contenedor-info">
          <span className="contenedor-info-apodo">"{apodo}"</span>
          <span className="contenedor-info-nombre">{nombre}</span>
          <span className="contenedor-info-categoria">{categoria}</span>
          <span className="contenedor-info-categoria">{record}</span>
        </div>
      </div>
    </div>
  );
};

export default Fighter;
