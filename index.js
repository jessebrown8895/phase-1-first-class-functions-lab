const returnFirstTwoDrivers = function(firstTwoDrivers){
    return firstTwoDrivers.slice(0,2)
}

function returnLastTwoDrivers(lastTwoDrivers){
    return lastTwoDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
   return function(integer2){return integer * integer2}
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers)
}
const selectDifferentDrivers = (arrayOfDrivers, selectingDrivers) => selectingDrivers(arrayOfDrivers)