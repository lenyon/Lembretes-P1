import React from "react";

export default class LembreteLista extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lembretes;
    this.props.filtro
      ? (lembretes = this.props.lembretes.filter(
          (lembrete) => lembrete.favorito
        ))
      : (lembretes = this.props.lembretes);
    return lembretes.map((lembrete) => (
      <div className="container">

        <div className="row d-flex flex-grow-1 justify-content-center mt-3">
          <div className="col-10 p-0">
            <div className="card d-flex align-items-center">
              <div className="card-body col-12">
                  <div className="d-flex align-items-center ">
                    <h4 className="text-center flex-grow-1">
                      {lembrete.titulo}
                    </h4>
                    <div className="d-flex ">
                      <button
                        className="btn btn-outline-light active d-flex" style={{color:'#FFD43B'}}
                        onClick={() => this.props.atualizarFavorito(lembrete)}
                      >
                        {lembrete.favorito ? (
                          <i className="fa-solid fa-star fa"></i>
                        ) : (
                          <i className="fa-regular fa-star fa"></i>
                        )}
                      </button>
                      <button
                        className="btn btn-outline-light active d-flex" style={{color:'#FF0000'}}
                        onClick={() => this.props.removerLembrete(lembrete)}
                      >
                        <i className="fa-regular fa-circle-xmark fa"></i>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}
