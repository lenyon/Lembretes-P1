import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
    };
  }

  adicionarLembrete = (lembrete) => {
    this.state.lista.push(lembrete);

    this.setState({ lista: this.state.lista });
  };

  removerLembrete = (lembreteRemovido) => {
    let novaLista = this.state.lista.filter( lembrete => lembrete != lembreteRemovido )

    this.setState({lista: novaLista})
  }

  render() {
    return (
      <div className="container bg-primary rounded">
        <div className="row">
          <div className="col-12">
            <LembreteLista 
              lembretes={this.state.lista}
              removerLembrete={this.removerLembrete}
              />
          </div>
        </div>

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
