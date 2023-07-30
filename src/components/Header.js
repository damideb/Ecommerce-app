import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)

    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
<nav className="head">
    <h1>Styless</h1>
    <Link to='/'> <h3 className="first">Home</h3> </Link>
    <Link to='/items'> <h3 className="shop">Shop</h3> </Link>
    <Link to='#'> <h3 className="contact"> Contact Us</h3> </Link>
        <Link to="/cart">  <i id="icon" className={`${cartClassName} ri-fw ri-2x`}></i> </Link><small className="cartNumber">{cartItems.length}</small>
    </nav>
    <div className="buyNowText"><i >buy now and get 30% off your next purchase!!!</i></div>
        </header>
    )
}

export default Header