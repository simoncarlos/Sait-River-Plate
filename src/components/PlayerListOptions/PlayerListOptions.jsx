import { useLocation } from "react-router-dom";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

const PlayerListOptions = () => {

    const route = useLocation();

    return(
        <section className="py-48 bg-black flex-col items-center justify-around">
            <h1 className="text-2xl text-center">Listados de inscriptos:</h1>
            <div className="flex flex-wrap items-center justify-center">
                <ButtonFilter route={ route.pathname } category="1ra" />
                <ButtonFilter route={ route.pathname } category="2da" />
                <ButtonFilter route={ route.pathname } category="3ra" />
                <ButtonFilter route={ route.pathname } category="4ta" />
            </div>
        </section>
    );
};
export default PlayerListOptions