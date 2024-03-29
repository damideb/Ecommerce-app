import React, {useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"


function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}>
            </i>
            <img src={item.url} alt="" width="130px" />
            <small className="quantityFigure">{item.quantity}</small>
            <p>${item.price* item.quantity}</p>
        </div>
    )
}
export default CartItem