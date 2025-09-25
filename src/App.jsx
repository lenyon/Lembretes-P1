import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [],
    };
  }

  render() {
    return (
      <div className="container bg-primary border">
        <h1>Hello, Lembretes</h1>
      </div>
    );
  }
}

export default App;