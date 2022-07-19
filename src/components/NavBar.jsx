import IconUfc from "../img/icon-ufc.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="header-content-desktop isdark">
        <span>Eventos</span>
        <span>Rankings</span>
        <span>peleadores</span>
        <span>contenido destacado</span>

        <span>
          <img src={IconUfc} alt="icon-ufc" />
        </span>

        <span>videoteca</span>
        <span>redes sociales</span>
        <span>ve</span>
        <span>tienda</span>
      </div>
      <div className="header-content-mobile">
        <span>
          <img src={IconUfc} alt="icon-ufc" />
        </span>
        <span>peleadores</span>
      </div>
    </div>
  );
};

export default NavBar;
