import { Colour } from "./Features/Colour";
import { Fill } from "./Features/Fill";
import { Shape } from "./Features/Shape";

export class Card {
    private colour: Colour;
    private shape: Shape;
    private amount: number;
    private fill: Fill;

    constructor(colour: Colour, shape: Shape, amount: number, fill: Fill){
        this.colour = colour;
        this.shape = shape;
        this.amount = amount;
        this.fill = fill;
    }
}