import "./Player.css"

const Player = ( { players } ) => {
    
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
                <div className="flex flex-col items-start justify-center">
                    <img 
                    src="https://countryflagsapi.com/png/argentina" 
                    className="w-8 h-8 rounded-full"
                    alt="" />
                    <h2 className="text-white z-10 text-xl mt-12"><i>{players.NOMBRES}</i></h2>
                    <p className="z-10 text-sm mb-4">{players.CLUB}</p>
                    <div className="flex">
                        <p className="mr-4">
                            Rating: {players.PUNTAJETMT}
                        </p>
                        <img 
                        src="https://www.tenisdemesaparatodos.com/imagenes/icono_puesto_2da.gif"
                        className="rounded-xl w-10 h-6 opacity-70"
                        alt="Imagen de categoria" />

                    </div>
                </div>
                <div>

                </div>
            </div>
        </li>
    );
};

export default Player;