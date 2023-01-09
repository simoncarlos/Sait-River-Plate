import { useLocation } from "react-router-dom";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import { categories } from "../../utils/categories";

const PlayerListOptions = () => {

    const route = useLocation();

    return(
        <section className="h-auto md:px-96 py-10 bg-black flex flex-col items-center justify-around">
            <h1 className="my-10 text-2xl text-center">Listados de inscriptos:</h1>
            <div className="w-screen md:w-96 flex flex-wrap items-center justify-around">
            {
                categories.map( category => <ButtonFilter key={category} route={ route.pathname } category={ category } /> )
            }
            </div>
        </section>
    );
};
export default PlayerListOptions