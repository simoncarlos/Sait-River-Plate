import { useEffect, useState } from "react";
import "./PlayerListContainer.css";
import Loader from "../Loader/Loader"
import PlayerList from "../PlayerList/PlayerList";

const PlayerListContainer = () => {

    const [ loading, setLoading ] = useState( true );
    const [ data, setData ] = useState( [] );
    const url = "https://script.google.com/macros/s/AKfycbxQqOoLp9V7c1sN_KrnUSHmPjlQynJhjF6h-EEhYClRSXE4tAE/exec?action=read";
    
    const getData = async ( filter ) => {
        const data = await fetch(url);
        const dataParsed = await data.json();
        if(filter == ""){
            setData(dataParsed.records);
        }else{
            setData( dataParsed.records.filter( player => player.CATEGORIAS.includes( filter ) ) );
        }
        setLoading(false);
    };
    
    const changeFilter = ( category ) => {
        setLoading(true);
        getData( category );
    };

    useEffect( () => {

        if( loading ){
            getData("");
        }

    },[]);

    return(
        <section className="h-screen bg-black p-10">
            <h1 className="text-white text-center">Listado de inscriptos</h1>

            <div className="button-container flex flex-wrap items-center justify-center">
                <button className="button-category" onClick={ ()=>{ changeFilter("1ra") } } >1ra</button>
                <button className="button-category" onClick={ ()=>{ changeFilter("2da") } } >2da</button>
                <button className="button-category" onClick={ ()=>{ changeFilter("3ra") } } >3ra</button>
                <button className="button-category" onClick={ ()=>{ changeFilter("4ta") } } >4ta</button>
                <button className="button-category" onClick={ ()=>{ changeFilter("") } } >Todos</button>
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