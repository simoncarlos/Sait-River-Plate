import "./Header.css";
import { MdPlaylistAdd, MdOutlineApps, MdOutlineChecklist } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ( ) =>{
    
    const [desapear, setDesapear] = useState(false);
    const history = useNavigate();

    const changeAnimation = ( link ) => {
        setDesapear(true);
        setTimeout(() => history( link ), 999);
    }

    return(
        <div 
        className="h-screen bg-header relative flex items-center justify-between" >
            <div className="h-3/5 md:h-60 w-screen p-8 flex flex-col md:flex-row justify-between md:justify-around items-stretch z-10">
                <div className={ desapear ? ("bg-filter" + " bg-desapear") : "bg-filter" }></div>
                <h1 className={`title-header z-10 ${ desapear ? "text-desapear" : "" }`} >22° Torneo TMT <br /> River Plate</h1>
                <div className="md:w-80  grid grid-rows-2 grid-cols-8 gap-4">
                    <a 
                    href="https://api.whatsapp.com/send?phone=5491131233776&text=%C2%A1Hola!%20%C2%BFC%C3%B3mo%20estas%3F%20Me%20gustar%C3%ADa%20inscribirme%20al%2052%C2%B0%20torneo%20TMT%20%22Alvear%20Nittaku%22%20de%20este%20domingo%2015%20de%20enero%F0%9F%8F%93"
                    target="_blank"
                    className={`col-span-8 bg-glass p-6 flex items-center justify-between button-animation ${ desapear ? "bg-desapear" : "" }`}>
                        <p className={`text-white ${ desapear ? "text-desapear" : "" }`}>Inscribirme</p>
                        <MdPlaylistAdd className={`text-white ${ desapear ? "text-desapear" : "" }`}/>
                    </a>
                    <button
                    className={`col-span-4 bg-glass p-6 flex items-center justify-between button-animation ${ desapear ? "bg-desapear" : "" }`}
                    onClick={ ()=>{ changeAnimation("/list") } }>
                        <p className={`text-white ${ desapear ? "text-desapear" : "" }`}>Listado</p>
                        <MdOutlineChecklist className={`text-white ${ desapear ? "text-desapear" : "" }`}/>
                    </button>
                    <button
                    className={`col-span-4 bg-glass p-6 flex items-center justify-between button-animation ${ desapear ? "bg-desapear" : "" }`}
                    onClick={ ()=>{ changeAnimation("/zone") } }>
                        <p className={`text-white ${ desapear ? "text-desapear" : "" }`}>Zonas</p>
                        <MdOutlineApps className={`text-white ${ desapear ? "text-desapear" : "" }`}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;