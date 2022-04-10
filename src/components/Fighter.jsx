import React from "react";

const Fighter = ({ fighter }) => {
  const { nombre, apodo, categoria, record, imagen } = fighter;
  return (
    <div className="flip-card">
      <div className="contenedor-flip-card-inner">
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
        <div className="contenedor-fighter-back">
          <div className="prueba">
            <img
              className="imagen-fighter-back"
              src="https://dmxg5wxfqgb4u.cloudfront.net/styles/event_fight_card_upper_body_of_standing_athlete/s3/image/ufc-fighter-container/69075/profile-galery/fullbodyright-picture/ricardo-abreu_477654_RightFullBodyImage.png?VersionId=tfHwzSh5p3yVY_QBsgE9G3hd0lPlRWql&itok=eIz2bFdw"
              alt=""
            />
            <div className="contenedor-back-info">
              <span className="contenedor-back-apodo">"{apodo}"</span>
              <span className="contenedor-back-nombre">{nombre}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fighter;
