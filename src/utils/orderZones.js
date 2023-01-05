export const orderZones = ( list, amountZones, zoneOfFour  ) => {
    let newArray = [];
    let partialObjects = [];
    list.forEach( ( element, index ) => {
        if( ( index + 1 ) % 3 != 0 ){
            partialObjects.push( element )
        }
    });
}