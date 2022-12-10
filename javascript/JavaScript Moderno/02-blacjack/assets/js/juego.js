/**
 * 2C = twof clubs
 * 2D = twof Diaminds
 * 2H = twof Hearts
 * 2S = twof Spades
 */

let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

//Esta duncion cre un nuevo deck
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let especial of especiales) {
      deck.push(especial + tipo);
    }
  }
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();

//Esta funcion me permite tomar una carta
// console.log(deck.length);
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas el el deck";
  }
  return deck.pop();
};

//Pedir carts

const valorCarta = carta => {
  const valor = carta.substring(0, carta.length - 1);
  // console.log({valor});
  // 2 = 2 10=1 , 3=3
  // let puntos = 0;
  // if (isNaN(valor)) {
  //   // console.log('No es número');
  //   puntos = valor === "A" ? 11 : 10;
  // } else {
  //   puntos = valor * 1;
  //   // console.log('Es un número')
  // }
  // console.log(puntos);
  return !isNaN(valor) ? valor * 1 : valor === "A" ? 10 : 11;
};
console.log(valorCarta("AD"));

