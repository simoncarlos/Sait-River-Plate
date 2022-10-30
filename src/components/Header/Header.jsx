import "./Header.css";
import { MdPlaylistAdd, MdOutlineApps, MdOutlineChecklist } from "react-icons/md";

const Header = () =>{
    
    const changeAnimation = () => {
        const background = document.getElementsByClassName("bg-header");
        background.className += "bg-desapear";
    }

    return(
        <div className="h-screen bg-header relative flex items-center justify-between">
            <div className="h-3/5 md:h-60 w-screen p-8 flex flex-col md:flex-row justify-between md:justify-around items-stretch z-10">
                <h1 className="title-header z-10">22° Torneo TMT <br /> River Plate</h1>
                <div className="md:w-80  grid grid-rows-2 grid-cols-8 gap-4">
                    <a
                    className="col-span-8 bg-glass p-6 flex items-center justify-between"
                    onClick={changeAnimation}>
                        <p className="text-white">Inscribirme</p>
                        <MdPlaylistAdd />
                    </a>
                    <a
                    className="col-span-4 bg-glass p-6 flex items-center justify-between"
                    onClick={changeAnimation}>
                        <p className="text-white">Listado</p>
                        <MdOutlineChecklist />
                    </a>
                    <a
                    className="col-span-4 bg-glass p-6 flex items-center justify-between"
                    onClick={changeAnimation}>
                        <p className="text-white">Zonas</p>
                        <MdOutlineApps />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Header;