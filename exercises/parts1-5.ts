import { SpaceLocation } from './SpaceLocation';

// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;

// Part 2: Print Days to Mars

// const milesToMars: number = kilometersToMars * milesPerKilometer;
// const hoursToMars: number = milesToMars / speedMph;
// const daysToMars: number = Math.round((hoursToMars / 24)*100) / 100;



// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.


// Part 4: Create a Spacecraft Class

class Spacecraft {
    static milesPerKilometer: number = 0.621;
    private name: string;
    private speedMPH: number;

    constructor(name: string, speedMPH: number) {
        this.name = name;
        this.speedMPH = speedMPH;
    }

    public getDaysToLocation(kilometersAway: number): number {
        const milesAway: number = kilometersAway * Spacecraft.milesPerKilometer;
        const hoursToLocation: number = milesAway / this.speedMPH;
        const daysToLocation: number = Math.round((hoursToLocation / 24)*100) / 100;
        return daysToLocation;
    }

    public getName() {
        return this.name;
    }

    public printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
    
}


// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

// console.log(`It takes ${spaceShuttle.getName()} ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to mars.`);
// console.log(`It takes ${spaceShuttle.getName()} ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`);


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

spaceShuttle.printDaysToLocation(new SpaceLocation("Mars", kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation("the moon", kilometersToTheMoon));

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
