import { createContext } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ hola: "mundo" }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
export { DataProvider };
