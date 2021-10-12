import { choice } from "./helpers";

const CARDS = {
    "A": 11,
    "K": 10,
    "Q": 10,
    "J": 10,
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
function pickACard (){
    const cardType = choice(Object.keys(CARDS));
    const cardValue = CARDS[cardType];

    const suite = choice(SUITES);

    const imgURL = `${IMG_URL_BASE}/${cardType}${suite}.png`;

    return {cardValue, imgURL};
}

/** function that picks two cards from a deck of 52, two cards will not be the same,
 * returns an array of card objects. 
 * example: [{cardValue, imgURL},{cardValue, imgURL}]
 */
function pickTwoCards(){
    let card1 = pickACard();

    let card2;
    // while(card2.imgURL === card1.imgURL){
    //     card2= pickACard();
    // }
    do {card2= pickACard()} while (card2.imgURL === card1.imgURL); //do it at least once
    return [card1, card2];

}



export {pickTwoCards};