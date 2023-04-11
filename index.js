// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return streetNumber - 42
}

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264 ;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice (start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
    return 0
   } if (distance >= 400 && distance <= 2000) {
    return (distance-400) * .02
   } if (distance >= 2000 && distance <= 2500) {
    return 25
   } else if (distance >= 2500) {
    return "cannot travel that far"
   } 
}




