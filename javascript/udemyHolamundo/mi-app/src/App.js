import Button from "./Button"


// class App extends Component {
//   render(){
//     return (
//       <p>
//         Hola mundo
//       </p>
//     )
//   }
// }

const arr= [
  'chanchito feliz',
  'chanchito triste',
  'chanchito xd',
]

const App = () =>{
  const miVariable = false
  if(miVariable){
    return <p>MI variable dio true!</p>
  }
  return (
    <div>
      <h1 onClick={(e)=>console.log('clic',e)}>Hola mundo</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={() =>console.log('clickeado')}>
        Enviar
      </Button>
    </div>
  )
}

export default App