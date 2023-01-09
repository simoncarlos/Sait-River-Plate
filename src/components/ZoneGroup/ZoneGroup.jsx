const ZoneGroup = ( { zone, number } ) => {
    return(
        <div className="w-full md:w-4/12 py-2 px-4 m-4  bg-slate-900 rounded-lg">
            <h2 className="text-white text-xl mb-4">Zona {number}</h2>
            {
                zone.map( player => {
                    return <div 
                    className="mt-4 text-white w-full"> 
                        <p className="w-full -mb-2 flex items-center justify-between text-lg">
                            {player.NOMBRES}
                            <span className="text-base">
                                {player.PUNTAJETMT}pts
                            </span>
                        </p>
                        <small className="text-xs">
                            {player.CLUB}
                        </small>
                    </div>
                })
            }
        </div>
    );
};
export default ZoneGroup;