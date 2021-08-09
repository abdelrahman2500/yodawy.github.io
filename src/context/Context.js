import { createContext, useEffect, useState } from "react";



export const Context = createContext()

export function ContextProvider(props){
    const[products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));


        localStorage.setItem("lang", localStorage.getItem("lang") == null ? "en" : localStorage.getItem("lang"))
    })



    return(
        <Context.Provider value={{products}}>
            {props.children}
        </Context.Provider>
    )
}