import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import styled from "styled-components"


const NavbarLink =styled.a`
color:white;
font-weight: lighter
`
function Header() {
    const {cartItems} = useContext(Context)

    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>

<nav className="head">
    <h1>BagUp</h1>
    <h3><NavbarLink href='/'> Home </NavbarLink></h3>
    <h3><NavbarLink href='/items'> Shop </NavbarLink></h3>
        <h3>contact us</h3>
        <Link to="/cart">  <i className={`${cartClassName} ri-fw ri-2x`}></i> </Link><small className="cartNumber">{cartItems.length}</small>
    </nav>
    <div className="buyNowText"><i >buy now and get 30% off your next purchase!!!</i></div>
        </header>
    )
}

export default Header