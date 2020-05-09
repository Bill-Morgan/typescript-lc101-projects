import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo;
    astronauts: Astronaut[];

    constructor(name: string, totalCapaityKg: number, cargoItems: Cargo, astronauts: Astronaut[]) {
        this.name = name;
        this.totalCapacityKg = totalCapaityKg;
        this.cargoItems = cargoItems;
        this.astronauts = astronauts;
    }

    sumMass( items: Payload[] ): number {
        let returnVal: number = 0;
        for (let i = 0; i < items.length; i++) {
            returnVal += items[i].massKg;
        }
        return returnVal;
    }
    currentMassKg(): number {
        let everyThing: Payload[] = [];
        everyThing.push(this.cargoItems.payload)
        return(this.sumMass())
    }
}