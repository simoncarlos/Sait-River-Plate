import LogoRiver from "../../assets/logos/logo-river-plate.png";
import "./Loader.css";

const Loader = () =>{
    return(
        <div className="h-auto">
            <img 
            src={LogoRiver} 
            className = "loader-page"
            alt="Logo de River Plate" />
            <h2>Cargando jugadores..</h2>
        </div>
    );
};

export default Loader;