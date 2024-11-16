import { createContext, useState, useContext } from "react";

export const cartContext = createContext(null);


// Custom Hook
export const useCart = () => {
    const cart = useContext(cartContext);
    return cart;
}

export const ContextProvider = (props) => {

    const [items, setItems] = useState([]);

    return(
        <cartContext.Provider  value={{items, setItems}}>
            {props.children}
        </cartContext.Provider>
    )
};