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
                    <button
                    className={`col-span-8 bg-glass p-6 flex items-center justify-between button-animation ${ desapear ? "bg-desapear" : "" }`}
                    onClick={ ()=>{ changeAnimation("/inscription") } }>
                        <p className={`text-white ${ desapear ? "text-desapear" : "" }`}>Inscribirme</p>
                        <MdPlaylistAdd className={`text-white ${ desapear ? "text-desapear" : "" }`}/>
                    </button>
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