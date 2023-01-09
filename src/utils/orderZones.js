export const orderZones = ( list, amountZones, zoneOfFour  ) => {
    let newZonesGroup = [];
    for (let index = 1; index <= amountZones; index++) {
        newZonesGroup.push( list.filter( player => player.ZONE === index ) );
    }
    return newZonesGroup
}