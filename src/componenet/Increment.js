import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="App">
        <h1> Simple Counter </h1>
        <h4>Topics covered:</h4>
        <p>React class-based components, props, state.</p>
        <button onClick={this.increment} className="counter">
          +
        </button>
        <button onClick={this.decrement} className="counter">
          -
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default Increment;
