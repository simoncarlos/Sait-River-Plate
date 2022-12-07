import { Link } from "react-router-dom";

const ButtonFilter = ( { route, category } ) => {
    return(
        <Link to={`${route}/${category}`}
        className="cursor-pointer text-xl px-2.5 py-1 bg-transparent w-auto rounded-lg hover:bg-slate-800 ease-in-out duration-500">
            { category } Categoria
        </Link>
    );
};

export default ButtonFilter;