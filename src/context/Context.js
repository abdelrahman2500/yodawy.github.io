

import { createContext, useEffect, useState } from "react";
import data from "../data.json";

export const Context = createContext();

export function ContextProvider(props) {

    const [products, setProducts] = useState(data.products)
    const [filterd, setFilterd] = useState()
    const [lang, setLang] = useState(localStorage.setItem("lang", localStorage.getItem("lang") === null ? "en" : localStorage.getItem("lang")))

    const [cart, setCart] = useState(localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items")) : [])

    const[count, setCount] = useState(cart.length)

    useEffect(()=>{
        setCount(cart.length)
    })
    
    function addToCart(product){
        let areadyInCart = false ;
        cart.slice().forEach((item) => {
            if(item.id === product.id){
                areadyInCart = true
                item.count < product.amount ? item.count++ : item.count= item.count
            }
        })
        if(!areadyInCart){
            cart.push({...product , count: 1})
        }
        localStorage.setItem("cart-items", JSON.stringify(cart))
    }

    function removeFromCart(product){
        let cartItem = cart.slice()
        let filtered = cartItem.filter((x) => x.id !== product.id)
        setCart(filtered)
        localStorage.setItem("cart-items", JSON.stringify(filtered))
    }

    function deleteAll(){
        if(cart.length === 0)
            return
        else{
            setCart([])
        }
        localStorage.setItem("cart-items", JSON.stringify([]))
    }

    function buyNow(){
        alert("Backend needed to continue")
    }

    const changeLang = function () {
        localStorage.setItem("lang", localStorage.getItem("lang") === "ar" ? "en" : "ar")
        setLang(localStorage.getItem("lang"))
    }

    useEffect(() => {
        setLang(localStorage.getItem("lang"))
    }, [lang, changeLang])

    useEffect(() => {
        setProducts(data.products);
    },[data.products]);

    useEffect(() => {
        setFilterd(data.products);
    },[data.products]);

    // useEffect(() => {
    //     fetch('http://localhost:3001/products')
    //         .then((response) => response.json())
    //         .then((data) => setFilterd(data));
    // },[]);

    

    return (
        <Context.Provider value={{ lang, changeLang, products , filterd, setFilterd ,count, cart,setCart, addToCart, removeFromCart,deleteAll, buyNow}}>
            {props.children}
        </Context.Provider>
    )
}







