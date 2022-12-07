import { useLocation } from "react-router-dom";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import { categories } from "../../utils/categories";

const ZoneListOptions = () => {

    const route = useLocation();

    return(
        <section className="py-48 bg-black flex-col items-center justify-around">
            <h1 className="text-2xl text-center">Sembrado de zonas:</h1>
            <div className="flex flex-wrap items-center justify-center">
                {
                    categories.map( category => <ButtonFilter key={category} route={ route.pathname } category={ category } /> )
                }
            </div>
        </section>
    );
};
export default ZoneListOptions;