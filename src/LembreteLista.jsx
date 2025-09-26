import React from "react";

export default class LembreteLista extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.lembretes.map((lembrete) => (
      <div className="card">
        <div className="card-body">
          <div className=" d-flex flex-grow-1 align-items-center">
            <h4 className="text-center flex-grow-1">{lembrete.titulo}</h4>
            <div className="d-flex">
              <button className="btn btn-primary d-flex me-3">
                <i className="fa-solid fa-star fa-2x"></i>
              </button>
              <button className="btn btn-danger d-flex" 
                      onClick={() => this.props.removerLembrete(lembrete)}>
                <i className="fa-solid fa-circle-xmark fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}