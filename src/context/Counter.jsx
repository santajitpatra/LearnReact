import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const CounterContext = createContext(null)


export const CounterProvider = (props) => {
    const [count, setCount] = useState(0)

    return (
        <CounterContext.Provider value={{count, setCount}}>
        {props.children}
      </CounterContext.Provider>
    );
  }

  CounterProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };