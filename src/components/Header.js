import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <nav className="head">
                <Link to='/'> <h2 className="first">HOME</h2> </Link>
                <Link to='/items'> <h2 className="shop">SHOP</h2> </Link> 
                <Link to='#'> <h2 className="contact">CONTACT</h2> </Link>
                <Link to="/cart">  <i id="icon" className={`${cartClassName} ri-fw ri-2x`}></i> </Link><small className="cartNumber">{cartItems.length}</small>
            </nav>

        </header>
    )
}
export default Header