import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppProvider({ children }) {
  return (
    <AppContext.Provider value={"Santajit"}>
      {children}
    </AppContext.Provider>
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
