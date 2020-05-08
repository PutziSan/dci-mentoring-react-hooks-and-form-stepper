import React from "react";

export class TestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }

  // this is syntacical sugar for the above version:
  // state = {
  //   counter: 0,
  // };

  render() {
    return (
      <div>
        <h2>Test 2</h2>
        <p>counter: {this.state}</p>
        <button onClick={() => this.setState(this.state + 1)}>+</button>
      </div>
    );
  }
}

export function App(props) {
  // useState returns an array:
  // first parameter is the value of your created state,
  //  this value will always be the latest value
  // second parameter is a function, to change the state,
  //  so if you call the second function, the component will rerender
  //  and the first parameter (the value) will be updated with this new value
  const [
    // compated to the class-syntax, this is like
    // this.state.counter
    counter,
    // compared to the class-syntax, this is like
    // this.setState({ counter: ... })
    setCounter,
  ] = React.useState(
    // this value is ONLY used for initial value,
    // on state-updates the initial value is not used any more
    0
  );
  // just FYI, the destructured version from above could also be written
  // with plain javascript and the array-syntax:
  // const stateObj = React.useState(0);
  // stateObj[0] // this is the value of this state
  // stateObj[1] // this is the function to update the state

  // regarding to initial-values and different values:
  // if you omit the initial value, the first value will be undefined!
  const [counterWithNoInit, setCounterWithNoInit] = React.useState();
  // different data-types:
  const [arr, setArr] = React.useState([]);
  const [obj, setObj] = React.useState({ name: "", email: "" });
  // it is not very common to use an object with useState,
  // in this case you would rather create to states like:
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div>
      <h1>clean start</h1>
      <h2>stateful logic with functional component:</h2>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <p>counterWithNoInit: {counterWithNoInit}</p>

      <h3>array example</h3>
      {arr.map((item) => {
        return (
          <div>
            <p>item: {item}</p>
          </div>
        );
      })}
      <button onClick={() => setArr([...arr, "cool"])}>add item</button>
      <h3>object example</h3>
      <pre>{JSON.stringify(obj)}</pre>
      <button onClick={() => setObj({ ...obj, name: "Cool" })}>
        change name
      </button>

      <h2>small exercise</h2>
      <ul>
        <li>create a new react app (CRA - create react app)</li>
        <li>create a functional component with some useState hooks</li>
        <li>
          create at least a useState with a string, with a number and with an
          array
        </li>
        <li>
          for every of the above three options, add a button, which changes the
          state on click
        </li>
      </ul>
    </div>
  );
}
