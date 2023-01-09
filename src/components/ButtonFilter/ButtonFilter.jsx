import { Link } from "react-router-dom";

const ButtonFilter = ( { route, category } ) => {
    return(
        <Link to={`${route}/${category}`}
        className="w-36 md:w-40 h-32 md:h-36 my-4 cursor-pointer flex items-center justify-center text-xl bg-slate-800 rounded-lg hover:bg-transparent ease-in-out duration-500">
            { category }
        </Link>
    );
};

export default ButtonFilter;