import { fetchPlayers } from "./fetchPlayers";

const algorithm = async ( category ) => {

    const playerList = await fetchPlayers(category);
    const orderList = await playerList.sort( ( player1, player2 ) =>  player2.PUNTAJETMT - player1.PUNTAJETMT );
    const amountZones = Math.trunc(orderList.length / 3);
    const zoneOfFour = amountZones - ( orderList.length - ( amountZones * 3 ) );
    let count = 0;
    for (let j = 1; j <= amountZones; j++) {
        orderList[count].ZONE = j;
        count++;
    }
    for (let k = amountZones; k >= 1 ; k--) {
        orderList[count].ZONE = k;
        count++;
    }
    for (let y = 1; y <= amountZones; y++) {
        orderList[count].ZONE = y;
        count++;
    }
    for (let z = amountZones; z > zoneOfFour; z--) {
        orderList[count].ZONE = z;
        count++;
    }
    orderList.forEach(player => {
        console.log(`Nombre: ${player.NOMBRES}, puntaje: ${player.PUNTAJETMT}, zona: ${player.ZONE}`);
    });

};

export default algorithm;
