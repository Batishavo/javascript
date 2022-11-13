import {Component} from "react";
import BubbleAlert from "./BublblAlert";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: "20px",
  },
};

class Carro extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>
        <button style={styles.carro}>Carro</button>
      </div>
    );
  }
}

export default Carro;
