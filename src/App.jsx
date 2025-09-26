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

  atualizarFavorito = (lembreteAtualizado) => {
    this.state.lista.filter(lembrete => {
      if (lembrete == lembreteAtualizado){
        lembrete.favorito = !lembrete.favorito
      }
    })

    this.setState({lista: this.state.lista})
  }

  render() {
    return (
      <div className="container bg-primary rounded">
        <div className="row">
          <div className="col-12">
            <LembreteLista 
              lembretes={this.state.lista}
              removerLembrete={this.removerLembrete}
              atualizarFavorito={this.atualizarFavorito}
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
