import Logo from "../../assets/logos/logo-river-plate.png"
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="https://api.whatsapp.com/send?phone=5491131233776&text=%C2%A1Hola!%20%C2%BFC%C3%B3mo%20estas%3F%20Me%20gustar%C3%ADa%20inscribirme%20al%2052%C2%B0%20torneo%20TMT%20%22Alvear%20Nittaku%22%20de%20este%20domingo%2015%20de%20enero%F0%9F%8F%93" target="_blank">Inscripciones</a></li>
                    <li><Link to="/list">Listado</Link></li>
                    <li><Link to="/zone">Zonas</Link></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost normal-case text-xl">River Plate</Link>
            </div>
            <Link to="/" className="navbar-end mr-5">
                <img 
                src={Logo} 
                className="h-10 grey-scale"
                alt="Logo de River Plate" />
            </Link>
        </div>
    )
};

export default NavBar;