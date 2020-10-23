import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "Rayen",
      person: {
        name: "Wael",
        age: 40,
        email: "wael@gmail.com",
      },
      counter: 0,
      // myInput: "",
      arr: ["Hello", "Bonjour"],
    };
  }

  update = () => {
    this.setState({
      person1: { name:"sirag", age:10 },
    });
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  // handelChange = (x) => {
  //   this.setState({
  //     myInput: x,
  //   });
  // };

  add = (y) => {
    this.setState({
      arr: [...this.state.arr, y],
    });
  };

  // handelClick=()=>{
  //   this.setState({name:"Siraj"})
  // }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.handelClick}>{this.state.name}</h1>
        <h3 onClick={this.update}>{this.state.person.age}</h3>

        {/* <button onClick={this.increment}>+</button> */}
        {/* <h2>{this.state.counter}</h2> */}
        <Counter
          count={this.state.counter}
          // Wael={this.handelChange}
          add={this.add}
        />
        {/* <button onClick={this.decrement}>-</button> */}

        {this.state.arr.map((el) => (
          <h4>{el}</h4>
        ))}
      </div>
    );
  }
}
