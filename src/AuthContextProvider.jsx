import React, { createContext, useState } from 'react'

export const Authcontext = createContext();

const AuthContextProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    const fetchCartItem = async () => {
        const token = localStorage.getItem("token");

        try {
            const res = await fetch("https://test-back-2-h9d7.onrender.com/product", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log(data.notes);
            setProduct(data.notes);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Authcontext.Provider value={{ fetchCartItem, setProduct, product }}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthContextProvider