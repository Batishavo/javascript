import _ from "underscore";

//Esta funcion cre un nuevo deck
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  //console.log(deck);
  return _.shuffle(deck);
};

export default crearDeck;