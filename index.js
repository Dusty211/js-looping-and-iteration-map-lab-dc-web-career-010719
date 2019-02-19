// Code your solution in this file.

function lowerCaseDrivers(names) {
  return names.map(function(name) { return name.toLowerCase(); });
}

function nameToAttributes(names) {
  return names.map( function(name) { return {firstName: name.split(" ")[0], lastName: name.split(" ")[1]}; });
}

function attributesToPhrase(drivers) {
  return drivers.map( function(driver) { return `${driver.name} is from ${driver.hometown}`; });
}
