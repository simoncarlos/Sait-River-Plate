import { useEffect, useState } from "react";
import "./PlayerListContainer.css";
import Loader from "../Loader/Loader"
import PlayerList from "../PlayerList/PlayerList";
import { fetchPlayers } from "../../utils/fetchPlayers";
import { useParams } from "react-router-dom";

const PlayerListContainer = () => {

    const [ loading, setLoading ] = useState( true );
    const [ data, setData ] = useState( [] );
    const { category } = useParams();

    const getData = async ( categoryFilter ) => {
        
        const dataPlayers = await fetchPlayers( categoryFilter );
        setData(dataPlayers)
        setLoading(false);
    };

    useEffect( () => {

        getData( category );

    },[]);

    return(
        <section className="bg-black p-10">
            <h1 className="text-white text-center">Listado de inscriptos de { category } categoria</h1>
            <div className={ loading ? "LoaderContainer" : "PlayerListContainer" }>
                {
                    loading
                    ? <Loader/>
                    : <PlayerList players={data}/>
                }
            </div>
        </section>
    );
};

export default PlayerListContainer;