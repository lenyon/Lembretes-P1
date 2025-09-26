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
    this.setState({titulo:""})
  };

  digitandoLembrete = (e) => {
    let textoDigitado = e.target.value;
    this.setState({ titulo: textoDigitado });
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div>
            <input
              type="text"
              className="form-control text-center mt-3"
              placeholder="Digite seu novo lembrete"
              value={this.state.titulo}
              onChange={this.digitandoLembrete}
            />
          </div>
          <button
            onClick={this.adicionarLembrete}
            className="btn btn-outline-primary w-100 mt-2"
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}