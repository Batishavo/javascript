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
    carro:[
      
    ],
  };
  render() {
    return (
      <div>
        <Navbar/>
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("No hace nada")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
