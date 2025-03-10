//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startFuel = 0;
let astronautCount = 0;
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require('readline-sync');

while (startFuel <= 5000 || startFuel > 30000 || isNaN(startFuel)) {
  startFuel = input.question("Enter starting fuel level: ");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while (astronautCount <1 || astronautCount >7 || isNaN(astronautCount)) {
  astronautCount = input.question("Enter number of astronauts: ");
}
   
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startFuel-100*astronautCount >= 0) {
  altitude += 50;
  startFuel -= 100*astronautCount;
  }
  // console.log(altitude)

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
  console.log(output += " Orbit achieved!");
} else {
  console.log(output += " Failed to reach orbit.")
}

// if (altitude >= 2000) {
//   console.log ("Orbit achieved!");
// } else {
//   console.log("Failed to reach orbit");
// }