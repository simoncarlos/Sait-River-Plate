import { useEffect } from "react";
import { useParams } from "react-router-dom";
import algorithm from "../../utils/algorithm";

const ZoneContainer = () => {

    const { category } = useParams();

    useEffect( () => {

        algorithm(category);

    },[]);

    return(
        <>
        </>
    );
};

export default ZoneContainer;