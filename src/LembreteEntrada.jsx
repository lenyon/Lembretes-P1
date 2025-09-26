import React from "react";

export default class LembreteEntrada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      favorito: false,
    };
  }

  adicionarLembrete = () => {
    this.props.adicionarLembrete(this.state);
    this.setState({ titulo: "" });
  };

  digitandoLembrete = (e) => {
    let textoDigitado = e.target.value;
    this.setState({ titulo: textoDigitado });
  };

  render() {
    return (
      <div className="container col-10 d-flex mt-3 p-0">
        <input 
          type="text"
          className="form-control text-center me-3"
          placeholder="Digite seu novo lembrete"
          value={this.state.titulo}
          onChange={this.digitandoLembrete}
        />
        <button
          onClick={this.adicionarLembrete}
          className="btn btn-primary"
        >
          OK
        </button>
      </div>
    );
  }
}
