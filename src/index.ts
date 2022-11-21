import { DeckBuilder } from "./Deck/DeckBuilder";
import { DeckController } from "./GameController/DeckController";

const deck = new DeckBuilder().BuildDeck();

const deckController = new DeckController(deck);

deckController.dealStartingCards();

deckController.dealCards(4);