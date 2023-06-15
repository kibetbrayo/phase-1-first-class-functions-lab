function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, selectorFunction) {
  return selectorFunction(drivers);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
