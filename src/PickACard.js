import { choice } from "./helpers";

const CARDS = {
    "A": 11,
    "K": 10,
    "Q": 10,
    "J": 10,
    "10": 10,
    "9": 9,
    "8": 8,
    "7": 7,
    "6": 6,
    "5": 5,
    "4": 4,
    "3": 3,
    "2": 2
}

const SUITES = ["H","D","S","C"];

const IMG_URL_BASE = "https://deckofcardsapi.com/static/img";

/*Picks a random card from a deck of 52 cards.
 * Returns card imgURL and value.
 */
function PickACard (){
    const cardType = choice(Object.keys(CARDS));
    const cardValue = CARDS[cardType];

    const suite = choice(SUITES);

    const imgURL = `${IMG_URL_BASE}/${cardType}${suite}.png`;

    return {cardValue, imgURL};
}

export default PickACard;