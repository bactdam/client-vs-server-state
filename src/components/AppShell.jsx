import { Outlet } from "react-router-dom";
import { AppContextProvider } from "../context/AppContext";

export const AppShell = () => {
  return (
    <AppContextProvider>
      <Outlet />
    </AppContextProvider>
  );
};
