import { createContext, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { PortfolioRecord } from "../types";

interface DataSourceContextType {
  records?: PortfolioRecord[];
  setRecords?: (records: PortfolioRecord[]) => void;
}

export const DataSourceContext = createContext<DataSourceContextType>({});

export const DataSourceProvider = ({ children }: { children: ReactNode }) => {
  const [records, setRecords] = useLocalStorage<PortfolioRecord[]>(
    "records",
    []
  );

  return (
    <DataSourceContext.Provider value={{ records, setRecords }}>
      {children}
    </DataSourceContext.Provider>
  );
};
