/**
 * 2C = twof clubs
 * 2D = twof Diaminds
 * 2H = twof Hearts
 * 2S = twof Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for(let tipo of tipos){
    for(let especial of especiales){
        deck.push(especial + tipo);
    }
  }
  console.log(deck);
};

crearDeck();
