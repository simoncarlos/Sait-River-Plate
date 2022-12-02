const algorithm = ( participants, category ) => {

    const list = participants.filter( participant => participant.category.includes( category )  );
    const orderList = list.sort( ( player1, player2 ) => { 
        return player2.score - player1.score
    });
    const amountZones = orderList.lenght / 3 ;
    const newList = []
    return newList;
};

export default algorithm;
