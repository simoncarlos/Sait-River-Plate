import ZoneGroup from "../ZoneGroup/ZoneGroup";

const ZoneList = ( { players } ) => {

    if( players.zones < 2 ){
        return(
            <>
                <h2 className="text-white">No se alcanzó la cantidad suficiente para esta categoria</h2>
            </>
        );
    }else{
        return(
            <>
                { 
                    players.data.map( ( zonePlayers, numberZone ) => {
                        return <ZoneGroup zone={ zonePlayers } number={ numberZone }></ZoneGroup>
                    })      
                } 
            </>
        );
    }
};

export default ZoneList;