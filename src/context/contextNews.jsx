import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../lib/reducer";

let API = "http://hn.algolia.com/api/v1/search?";

const AppContext = createContext();
const initialState = {
  isLoading: true,
  query: "html",
  page: 0,
  nbPages: 50,
  hits: [],
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fecthApiData = async (url) => {
dispatch({type: "SET_LOADING"})

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
  );
}
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// custon hook creation
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
