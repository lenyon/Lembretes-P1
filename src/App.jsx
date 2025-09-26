
import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      filtroAtivo: false,
    };
  }

  adicionarLembrete = (lembrete) => {
    this.state.lista.push(lembrete);

    this.setState({ lista: this.state.lista });
  };

  removerLembrete = (lembreteRemovido) => {
    let novaLista = this.state.lista.filter(
      (lembrete) => lembrete != lembreteRemovido
    );

    this.setState({ lista: novaLista });
  };

  atualizarFavorito = (lembreteAtualizado) => {
    this.state.lista.filter((lembrete) => {
      if (lembrete == lembreteAtualizado) {
        lembrete.favorito = !lembrete.favorito;
      }
    });

    this.setState({ lista: this.state.lista });
  };

  filtrarLembretes = () => {
    this.setState({ filtroAtivo: !this.state.filtroAtivo });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="border rounded-3 p-3" style={{background:'#6891BA'}}>
            
            
            <LembreteEntrada adicionarLembrete={this.adicionarLembrete} />
            
            <LembreteLista
              lembretes={this.state.lista}
              filtro={this.state.filtroAtivo}
              removerLembrete={this.removerLembrete}
              atualizarFavorito={this.atualizarFavorito}
            />

            </div>
            
            <button
              className={`btn  w-100 mt-2 ${this.state.filtroAtivo ? "btn-primary" : "btn-outline-primary"}`}
              onClick={this.filtrarLembretes}
            >
              Filtrar favoritos
            </button>
        </div>
      </div>
    );
  }
}

export default App;
