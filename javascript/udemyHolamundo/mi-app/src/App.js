//import Button from "./Button"
import {Component} from "react";

class Button extends Component {
  state = {valor:''};
  constructor(props) {
    super(props);
    console.log("contructor", props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("desmontando comoponente", this.props, this.state);
  }

  render() {
    console.log("ejecutando metodo render de button");
    return (
      <button onClick={() => this.setState({prop: 1})}>Enviar en app</button>
    );
  }
}

class App extends Component {
  render() {
    console.log(this.state);
    return (
      <p>
        Nombe
      </p>
    );
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

export default App;
