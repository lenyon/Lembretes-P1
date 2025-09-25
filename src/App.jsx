import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [
        {
          titulo: "preparar aula de programação",
          favorito: false,
        },
        {
          titulo: "Fazer feira",
          favorito: false,
        },
        {
          titulo: "Fazer marmita",
          favorito: false,
        },
      ],
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
          <div className="col-12">
            <LembreteLista lembretes={this.state.lista} />
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
