import Map from "../components/Map";
import Counter from "../components/Counter";
import { CounterContext } from "../context/Counter";
import { useContext } from "react";

const Test = () => {
  const counterState = useContext(CounterContext);
  console.log("Context: " + counterState);
  return (
    <div>
      <Map />
      <h2>Count is {counterState.count}</h2>
      <Counter />
    </div>
  );
};

export default Test;
