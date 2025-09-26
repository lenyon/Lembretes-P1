import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      filtroAtivo: false
    };
  }

  adicionarLembrete = (lembrete) => {

    if (lembrete.titulo == ""){return};
    
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

  filtrarLembretes = () => {
    
    this.setState({filtroAtivo: !this.state.filtroAtivo})

  }

  render() {
    return (
      <div className="container rounded">
        <div className="row">
          <div className="col-12">
            <LembreteLista 
              lembretes={this.state.lista}
              filtro={this.state.filtroAtivo}
              removerLembrete={this.removerLembrete}
              atualizarFavorito={this.atualizarFavorito}
              />
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
            <button className="btn btn-outline-primary w-100 mt-2"
                    onClick={this.filtrarLembretes}>Filtrar favoritos</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
