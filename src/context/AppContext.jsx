import { useContext, createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  return (
    <AppContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
