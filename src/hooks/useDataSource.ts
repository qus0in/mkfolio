import { useContext } from "react";
import { DataSourceContext } from "../contexts/DataSourceContext";

export const useDataSource = () => {
  const context = useContext(DataSourceContext);
  if (!context) {
    throw new Error("useDataSource must be used within a DataSourceProvider");
  }
  return context;
};
