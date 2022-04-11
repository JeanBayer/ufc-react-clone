import React from "react";

const Fighter = ({ fighter }) => {
  const {
    nombre,
    apodo,
    categoria,
    record,
    imagen,
    imagenTrasera,
    url,
    url2,
    url3,
  } = fighter;

  const handleClickSvg = (page) => {
    if (url.includes(page)) {
      window.open(url, "_blank");
      return;
    }
    if (url2.includes(page)) {
      window.open(url2, "_blank");
      return;
    }
    if (url3.includes(page)) {
      window.open(url3, "_blank");
      return;
    }
    window.alert("No hay información disponible en " + page);
  };

  return (
    <div className="flip-card">
      <div className="contenedor-flip-card-inner">
        <div className="contenedor-fighter-front">
          <div className="contenedor-fighter">
            <div className="contenedor-imagen">
              <img
                className="imagen-fighter"
                src={imagen}
                loading="lazy"
                alt=""
              />
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
          <div className="contenedor-back-info">
            <img
              className="imagen-fighter-back"
              src={imagenTrasera}
              alt=""
              loading="lazy"
            />
            <div className="contenedor-back-name-apodo">
              <span className="contenedor-back-apodo">"{apodo}"</span>
              <span className="contenedor-back-nombre">{nombre}</span>
            </div>
            <div className="button-perfil-atleta">
              <button>perfil de atleta</button>
            </div>
            <div className="social-network-perfil">
              <span>Seguir</span>
              <div className="icons-socials">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  style={{ fill: "#000000", cursor: "pointer" }}
                  onClick={() => {
                    handleClickSvg("facebook");
                  }}
                >
                  <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                  style={{ fill: "#000000", cursor: "pointer" }}
                  onClick={() => {
                    handleClickSvg("twitter");
                  }}
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ fill: "#000000", cursor: "pointer" }}
                  onClick={() => {
                    handleClickSvg("instagram");
                  }}
                >
                  {" "}
                  <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fighter;
