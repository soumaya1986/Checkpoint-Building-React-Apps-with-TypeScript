import React, { Component } from "react";

// Define the type for the state
interface CounterState {
  count: number;
}

// No need to define a prop type as this component does not take any props
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;
