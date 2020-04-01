import React from "react";
import ComponenteFuncional from "./ComponenteFuncional";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "Juan"
    };
  }

  render() {
    return (
      <div className="App">
        <p>Componente de clase.</p>
        <ComponenteFuncional
          nombre={this.state.nombre}
          eventoClase={x => {
            //this.setState({ nombre: x });
            console.log("dsa:", x);
          }}
        ></ComponenteFuncional>
      </div>
    );
  }
}

export default App;
