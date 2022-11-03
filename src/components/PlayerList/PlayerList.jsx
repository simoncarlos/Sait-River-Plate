import Player from "../Player/Player"

const PlayerList = ( { players } ) => {

    return(
        <ul className="p-0 m-0 flex flex-wrap items-center justify-center sm:justify-around">
            {
                players.map( (dataPlayer, index) => {
                    return <Player key={ index++ } players={dataPlayer} />
                })
            }
        </ul>
    );
};

export default PlayerList;