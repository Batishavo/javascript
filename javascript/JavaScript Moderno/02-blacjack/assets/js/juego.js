/**
 * 2C = twof clubs
 * 2D = twof Diaminds
 * 2H = twof Hearts
 * 2S = twof Spades
 */

const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];
//Referencias del HTML
const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo"),
  puntosHTML = document.querySelectorAll("small"),
  divCartasJugador = document.querySelector("#jugador-cartas"),
  divCartascomputadora = document.querySelector("#computadora-cartas");
//Variables
let puntosJugador = 0,
  puntosComputadora = 0,
  deck = [];

//Esta funcion cre un nuevo deck
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
  // console.log(deck);
  return deck;
};

//Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas el el deck";
  }
  return deck.pop();
};

//Pedir carts
const valorCarta = carta => {
  const valor = carta.substring(0, carta.length - 1);
  return !isNaN(valor) ? valor * 1 : valor === "A" ? 10 : 11;
};

//Turno de la computadora
const turnoComputadora = puntosMinimos => {
  do {
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;
    //Agregar carta
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartascomputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < 21 && puntosJugador > puntosComputadora);

  setTimeout(()=>{
    if (puntosJugador === puntosComputadora) {
      alert("empate");
    } else if (
      puntosJugador > 21 ||
      (puntosJugador < puntosComputadora && puntosComputadora <= 21)
    ) {
      alert("perdiste");
    } else {
      alert("ganaste");
    }
  },20);
  
};

//Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
  //Agregar carta
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    //console.warn("Perdiste");
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    //console.warn("21,genial!");
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnPedir.btnDetener = true;
  turnoComputadora(puntosJugador);
});
btnNuevo.addEventListener("click", () => {

  btnPedir.disabled = false;
  btnPedir.btnDetener = false;
  deck = [];
  crearDeck();
  divCartasJugador.innerHTML = "";
  divCartascomputadora.innerHTML = "";
  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;
  puntosJugador=0;
  puntosComputadora=0;
  console.clear();
})
//Inicializar
crearDeck();
//TODO : Borrara
