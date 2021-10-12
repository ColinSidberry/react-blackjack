/** Card component that takes an object with cards as an array of cards, 
 * each card contains info about the imgURL and the cardValue.
 * example: {cards: [{cardValue:10, imgURL:"https://deckofcardsapi.com/static/img/JD.png"},...]} 
 */


function Cards({cards}){
    
    let final = 0;
    for(let card of cards){
        final += card.cardValue;
    }

    return (
    <div>
       {cards.map(card => <img src={card.imgURL} alt="" />)}
       <p> Score: {final}</p>
       {final===21 && <p>BlackJack</p>}
    </div>
    );
}

export default Cards;