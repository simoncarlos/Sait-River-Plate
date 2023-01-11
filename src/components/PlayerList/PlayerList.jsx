import Player from "../Player/Player"

const PlayerList = ( { players } ) => {
    console.log(players.length)
    if( players.length === 0 ){
        return(
            <div className="h-96 flex items-center justify-center">
                <h1 className="text-white text-center">Aun no hay participantes inscriptos en esta categoria.</h1>
            </div>
        );
    }else{
        return(
            <ul className="p-0 m-0 flex flex-wrap items-center justify-center sm:justify-around">
                {
                    players.map( (dataPlayer, index) => {
                        return <Player key={ index++ } players={dataPlayer} />
                    })
                }
            </ul>
        );
    }
};

export default PlayerList;