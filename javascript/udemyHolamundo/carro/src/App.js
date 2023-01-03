import {Component} from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      {name: "Xbox720", price: 1500, img: "/assets/xbox720.png"},
      {name: "ninteno playstation", price: 1500, img: "/assets/nintendo.jpg"},
      {name: "ps5", price: 1500, img: "/assets/ps5.png"},
    ],
    carro: [],
    esCarroVisible:false,
  };

  agregarAlCarro= (producto)=>{
    // console.log(producto)
    const {carro}=this.state
    if(carro.find(x=>x.name === producto.name)){
      const newCarro = carro.map(x=>x.name === producto.name
        ?({
          ...x,
          cantidad:x.cantidad+1
        })
        :x
      )
      return this.setState({carro:newCarro});
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad:1
      })
    })
  }
  mostrarCarro = () =>{
    if(this.state.carro.length){
      this.setState({esCarroVisible:!this.state.esCarroVisible})
    }
    this.setState({esCarroVisible:!this.state.esCarroVisible})
    
  }
  render() {
    const {esCarroVisible} = this.state
    // console.log(this.state.carro)
    return (
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
