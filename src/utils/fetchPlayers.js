import { url } from "./urlGoogleScript";

export const fetchPlayers = async ( filter ) => {

    const players = await fetch( url );
    const playersParsed = await players.json(); 
    return playersParsed.records.filter( player => player.CATEGORIAS.includes( filter ) )

};