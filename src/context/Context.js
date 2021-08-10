/** @format */

import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export function ContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [lang, setLang] = useState(
    localStorage.setItem(
      "lang",
      localStorage.getItem("lang") === null
        ? "en"
        : localStorage.getItem("lang")
    )
  );

  const changeLang = function () {
    localStorage.setItem(
      "lang",
      localStorage.getItem("lang") === "ar" ? "en" : "ar"
    );
    setLang(localStorage.getItem("lang"));
  };

  useEffect(() => {
    setLang(localStorage.getItem("lang"));
  }, [lang, changeLang]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((productsData) => setProducts(productsData));
  }, []);

  return (
    <Context.Provider value={{ lang, changeLang, products }}>
      {props.children}
    </Context.Provider>
  );
}
