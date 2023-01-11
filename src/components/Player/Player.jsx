import "./Player.css"

const Player = ( { players } ) => {
    
    const defineCategory = puntaje => {
        if( puntaje >= 2100 ) return "1ra";
        else if( puntaje >= 1800 ) return "2da";
        else if( puntaje >= 1600 ) return "3ra";
        else if( puntaje >= 1400 ) return "4ta";
        else if( puntaje >= 1200 ) return "5ta";
        else if( puntaje >= 1080 ) return "6ta";
        else return "7ma";
    };

    return(
        <li className="h-52 border-2 border-gray-700 rounded-lg my-6 p-4 card-player">
            <div className="border-slate-600 rounded-lg w-full relative z-0">
                <img 
                src={ `https://www.tenisdemesaparatodos.com/fotos/jugadores/${players.CODIGOTMT}.jpg` }
                onError = { ( e ) => { 
                    e.target.onerror=null; 
                    e.target.src = "https://www.tenisdemesaparatodos.com/fotos/jugadores/_sinfoto.jpg" 
                }}
                className="w-28 absolute right-0 z-0"
                alt={`Foto de perfil de ${players.NOMBRES}`} />
                <div className="image-filter z-0"></div>
            </div>
            <div className="z-10 flex ">
                <div className="w-full pr-1 flex flex-col items-start justify-center">
                    <img 
                    src={`https://www.tenisdemesaparatodos.com/imagenes/icono_puesto_${defineCategory(players.PUNTAJETMT)}.gif`}
                    className="rounded-xl w-10 h-6 opacity-70"
                    alt="Imagen de categoria" />
                    <h2 className="text-white z-10 text-xl mt-12"><i>{players.NOMBRES}</i></h2>
                    <p className="z-10 text-sm mb-4">{players.CLUB}</p>
                    <div className="w-full flex items-center justify-between">
                        <p className="mr-4">
                            Rating: {players.PUNTAJETMT}
                        </p>
                        <a 
                        href={`https://www.tenisdemesaparatodos.com/jugadores_ficha.asp?codigo=${players.CODIGOTMT}`}
                        target="_blank"
                        className="text-white text-xs px-2 py-1 border-2 rounded-lg border-gray-400"
                        >Ver Perfil</a>

                    </div>
                </div>
                <div>

                </div>
            </div>
        </li>
    );
};

export default Player;