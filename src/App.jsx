import React from "react";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [],
    };
  }

  adicionarLembrete = (lembrete) => {
    this.state.lista.push(lembrete);

    this.setState({ lista: this.state.lista });
  };

  render() {
    return (
      <div className="container bg-primary rounded">
        <div className="row">
          <div className="col-12 mt-3">
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
