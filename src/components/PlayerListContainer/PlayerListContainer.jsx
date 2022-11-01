import { useEffect, useState } from "react";
import Loader from "../Loader/Loader"
import PlayerList from "../PlayerList/PlayerList";

const PlayerListContainer = () => {

    const [ loading, setLoading ] = useState( true );
    const [ data, setData ] = useState( { } );
    const url = "https://script.google.com/macros/s/AKfycbxQqOoLp9V7c1sN_KrnUSHmPjlQynJhjF6h-EEhYClRSXE4tAE/exec?action=read";
    
    const getData = async () => {
        const data = await fetch(url);
        return data
    };

    useEffect( () => {

        if( loading ){
            
            getData().then( data => data.json() ).then( response => {
                console.log(response);
                setData(response);
                setLoading(!loading);
            });

        }

    },[]);

    return(
        <section className="h-screen bg-black p-10">
            <h1 className="text-white text-center">Listado de inscriptos</h1>
            {
                loading
                ? <Loader/>
                : <PlayerList players={data}/>
            }
        </section>
    );
};

export default PlayerListContainer;