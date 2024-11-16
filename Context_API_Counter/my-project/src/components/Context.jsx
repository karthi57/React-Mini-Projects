import { createContext } from "react"
import { useState } from "react";

   // step 1 : cretaeing the Context => smaller box
   export const CounterContext = createContext(null);
 

    //step 2 : creating context provider => bigger box , 
    //Note : this is functional Component
   export const ContextProvider = (props)=>{
        const [count, setCount] = useState(0);
        return (
            <CounterContext.Provider value={{count, setCount}}>
            {props.children}
        </CounterContext.Provider>
        );
    };
 


