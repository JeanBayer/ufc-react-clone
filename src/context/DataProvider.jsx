import { createContext } from "react";
import PropTypes from "prop-types";
import useFighters from "../hooks/useFighters";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const fighters = useFighters();
  return (
    <DataContext.Provider value={{ fighters }}>{children}</DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
export { DataProvider };
