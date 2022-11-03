import { useEffect, useState } from "react";
import Loader from "../Loader/Loader"
import PlayerList from "../PlayerList/PlayerList";

const PlayerListContainer = () => {

    const [ loading, setLoading ] = useState( true );
    const [ data, setData ] = useState( [] );
    const [ filter, setFilter ] = useState( "" );
    const url = "https://script.google.com/macros/s/AKfycbxQqOoLp9V7c1sN_KrnUSHmPjlQynJhjF6h-EEhYClRSXE4tAE/exec?action=read";
    
    const getData = async ( filter ) => {
        const data = await fetch(url);
        const dataParsed = await data.json();
        setData( dataParsed.records.filter( player => player.CATEGORIAS.includes( filter ) ) );
        setLoading(!loading);
    };
    const changeFilter = ( category ) => {
        setFilter(category);
        setLoading(!loading);
    };// Terminar de modificar el changeFilter para que filte por categorias

    useEffect( () => {

        if( loading ){
            
            getData( filter );

        }

    },[]);

    return(
        <section className="h-screen bg-black p-10">
            <h1 className="text-white text-center">Listado de inscriptos</h1>

            <div>
                <button onClick={ ()=>{ changeFilter("1ra") } } >1ra</button>
                <button onClick={ ()=>{ changeFilter("1ra") } } >2da</button>
                <button onClick={ ()=>{ changeFilter("1ra") } } >3ra</button>
                <button onClick={ ()=>{ changeFilter("1ra") } } >4ta</button>
                <button onClick={ ()=>{ changeFilter("1ra") } } >5ta</button>
                <button onClick={ ()=>{ changeFilter("1ra") } } >6ta</button>
                <button onClick={ ()=>{ changeFilter("1ra") } } >7ma</button>
            </div>

            <div className="p-4 flex flex-col items-center justify-center">
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