//import Button from "./Button"
import {Component} from "react"

class Button extends Component {
  render(){
    console.log('ejecutando metodo render de button');
    return (
      <button>
        Enviar en app
      </button>
    )
  }
}

class App extends Component {
  state= {
    valor:3
  }
  render(){
    console.log(this.state)
    return (
      <div>
        <p>Hola mundo</p>
        <Button/>
        <button 
          className={`${this.state.valor}`}
          onClick={()=>this.setState({valor:2})}
          >
          Enviar
        </button>
      </div>
    )
  }
}

// const arr= [
//   'chanchito feliz',
//   'chanchito triste',
//   'chanchito xd',
// ]

// const App = () =>{
//   const miVariable = false
//   if(miVariable){
//     return <p>MI variable dio true!</p>
//   }
//   return (
//     <div>
//       <h1 onClick={(e)=>console.log('clic',e)}>Hola mundo</h1>
//       {arr.map(el => <p key={el}>{el}</p>)}
//       <Button onClick={() =>console.log('clickeado')}>
//         Enviar
//       </Button>
//     </div>
//   )
// }

export default App