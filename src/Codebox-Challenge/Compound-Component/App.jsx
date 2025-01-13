import React from "react";
import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Compound Component Patterns</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease={"-"}
        label="My Not so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <Counter>
        <Counter.Label> My super flexible Counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <div>
        <Counter>
          <Counter.Decrease icon="➖" />
          <Counter.Count />
          <Counter.Increase icon="➕" />
        </Counter>
      </div>
    </div>
  );
}
