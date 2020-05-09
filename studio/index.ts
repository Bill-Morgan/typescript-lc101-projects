// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.

import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Rocket } from './Rocket';

let falcon9: Rocket = new Rocket('Falcon 9', 7500);

let astronauts: Astronaut[] = [
   new Astronaut(75, 'Mae'),
   new Astronaut(81, 'Sally'),
   new Astronaut(99, 'Charles')
];

astronauts.forEach((astronaut) => {
    let status = '';
    if (falcon9.addAstronaut(astronaut)) {
        status = "On board";
    } else {
        status = "Not on board";
    }
    console.log(`${astronaut.name}: ${status}`);
})

let cargo: Cargo[] = [
   new Cargo(3107.39, "Satellite"),
   new Cargo(1000.39, "Space Probe"),
   new Cargo(753, "Water"),
   new Cargo(541, "Food"),
   new Cargo(2107.39, "Tesla Roadster"),
];

cargo.forEach((c) => {
    let loaded = '';
    if (falcon9.addCargo(c)) {
       loaded = "Loaded"
    } else {
       loaded = "Not loaded"
    }
    console.log(`${c.material}: ${loaded}`);
})

console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);