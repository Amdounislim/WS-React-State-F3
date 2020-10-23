import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: "",
  };
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <input
          type="text"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={()=>this.props.add(this.state.value)}>ADD</button>
      </div>
    );
  }
}
