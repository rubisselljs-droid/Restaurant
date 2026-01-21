import { createContext, useState } from "react";


export const ProductoContext = createContext();

export const ProductoProvider = ({children}) => {
    const [producto, setProducto] = useState([]);
    return (
        <ProductoContext.Provider value={{producto, setProducto}}>
            {children}
        </ProductoContext.Provider>
    );
};
