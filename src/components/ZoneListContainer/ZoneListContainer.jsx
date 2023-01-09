import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import algorithm from "../../utils/algorithm";
import ZoneList from "../ZoneList/ZoneList";
import Loader from "../Loader/Loader";
import "./ZoneListContainer.css";

const ZoneContainer = () => {

    const [ loading, setLoading ] = useState( true );
    const [ data, setData ] = useState( {} );
    const { category } = useParams();

    const getData = async ( categoryFilter ) => {
        const dataPlayers = await algorithm(categoryFilter);
        setData(dataPlayers);
        setLoading(false);
    }

    useEffect( () => {
        getData(category);
    },[]);

    return(
        <section className="bg-black py-10 px-2">
            <h1 className="text-white text-center">Sembrado de zonas de { category } categoria</h1>
            <div className={ loading ? "LoaderContainer" : "ZoneListContainer" }>
                {
                    loading
                    ? <Loader/>
                    : <ZoneList players={data}/>
                }
            </div>
        </section>
    );
};

export default ZoneContainer;