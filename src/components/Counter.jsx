import { CounterContext } from "../context/Counter"
import { useContext } from "react"


const Counter = () => {
  const counterContext = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => counterContext.setCount(counterContext.count + 1)}>Increase</button>
      <button>Decrease</button>
    </div>
  )
}

export default Counter
