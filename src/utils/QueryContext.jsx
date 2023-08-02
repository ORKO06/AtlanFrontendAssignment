import { createContext,useState } from "react";

const defaultV = {
    data:[],
    query:"",
  };
  
export const QueryContext = createContext(defaultV);

  const QueryContextProvider = ({ children }) => {
   const [data,setData] = useState([]);
   const [query,setQuery] = useState("Select * from Customers;");
    
    const value = {
      data,
      query,
      setData,
      setQuery,
    };
  
    return <QueryContext.Provider value={value}>{children}</QueryContext.Provider>;
  };
  
  export default QueryContextProvider;