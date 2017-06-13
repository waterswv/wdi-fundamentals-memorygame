var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];


cardsInPlay.push(cardOne);

console.log('user flipped '+cardOne);

cardsInPlay.push(cardTwo);

console.log('user flipped '+cardTwo);

// Have 2 cards been played
if (cardsInPlay.length === 2){

	if(cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match');
	}
	else {
		alert('Sorry, try again');
	}
}
