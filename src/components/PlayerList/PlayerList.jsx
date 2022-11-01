import Player from "../Player/Player"

const PlayerList = ( { players } ) => {

    const playersList = players.records;

    return(
        <>
            {
                playersList.map( (dataPlayer, index) => {
                    return <Player key={ index++ } players={dataPlayer} />
                })
            }
        </>
    );
};

export default PlayerList;