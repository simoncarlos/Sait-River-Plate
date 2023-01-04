import { url } from "./urlGoogleScript";

export const fetchPlayers = async ( filter ) => {

    const players = await fetch( url );
    const playersParsed = await players.json(); 
    const playerList = playersParsed.records;
    return playerList.filter( player => player.CATEGORIAS.includes( filter ) )

};