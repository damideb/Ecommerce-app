import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)

    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2>Home </h2></Link>
            <p>DressUP</p>
            <div className='cart-sign'>
           <Link to='/cart'><h4>Cart </h4></Link> 
                <Link to="/cart">  <i className={`${cartClassName} ri-fw ri-2x`}></i> </Link><small className="cartNumber">{cartItems.length}</small>
            </div>
            
        </header>
    )
}

export default Header