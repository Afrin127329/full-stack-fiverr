import { createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;