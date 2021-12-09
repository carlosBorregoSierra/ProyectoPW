import React, { createContext, useState } from "react";

export const Datacontext = createContext();

export const DataProvider = ({children}) => {

    const [count, setCount] = useState(0);

    return(
        <Datacontext.Provider value={{count, setCount}}>
            {children}
        </Datacontext.Provider>
    )
}