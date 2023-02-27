import React, { useState } from "react";
import React from "react";

function Item({ name, category }) {
    const [isInCart, setIsInCart] = useState(false);

    function handleAddToCart() {
        setIsInCart((isInCart) => !isInCart)
    }
    return ( <
        li className = { isInCart ? "in-cart" : "" } >
        <
        li className = "" >
        <
        span > { name } < /span> <
        span className = "category" > { category } < /span> <
        button onClick = { handleAddToCart }
        className = "add" > { isInCart ? "Remove From" : "Add to" }
        Cart < /button> <
        button className = "add" > Add to Cart < /button> <
        /li>
    );
}
export default Item;