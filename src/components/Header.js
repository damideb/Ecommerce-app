import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)

    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>

<nav class="head">
   <Link to="/"><h3>Home </h3></Link>
        <h3>About us</h3>
        <h3>Discover</h3>
        <h3>contact us</h3>
        <Link to="/cart">  <i className={`${cartClassName} ri-fw ri-2x`}></i> </Link><small className="cartNumber">{cartItems.length}</small>
    </nav>
            
        </header>
    )
}

export default Header