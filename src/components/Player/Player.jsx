const Player = ( { players } ) => {
    console.log(players);
    return(
        <>
            <h2 className="text-white">{players.NOMBRES}</h2>
        </>
    );
};

export default Player;