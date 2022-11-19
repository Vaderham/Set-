import { Card } from "../Cards/Card";

export class DeckController {
    private deck: Card[];
    private cardsInPlay: Card[] = [];

    constructor(deck: Card[]){
        this.deck = this.shuffle(deck);
    }

    public dealStartingCards(): Card[]{
        this.cardsInPlay.push(...this.deck.splice(0, 12));
        return this.cardsInPlay;
    }

    private shuffle(deck: Card[]) {
        let currentIndex = deck.length;
        let randomIndex: number;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [deck[currentIndex], deck[randomIndex]] = [
            deck[randomIndex], deck[currentIndex]];
        }
      
        return deck;
      }

}