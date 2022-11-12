import {Component} from 'react'
import Productos from './components/Productos'

class App extends Component {
  state = {
    productos:[
      {name:'Xbox720',price: 1500,img:'/assets/xbox720.png'},
      {name:'ninteno playstation',price: 1500,img:'/assets/nintendo.jpg'},
      {name:'ps5',price: 1500,img:'/assets/ps5.png'},
    ]
  }
  render(){
    return (
      <div>
        <Productos 
          agregarAlCarro={()=>console.log('No hace nada')}
          productos={this.state.productos}
        />
        {/* <p>Hola mundo</p> */}
      </div>
    )
  }
}

export default App;
