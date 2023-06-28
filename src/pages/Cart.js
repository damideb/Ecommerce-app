import React, {useContext,useState}from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const[orderPlaced, setOrderPlaced] = useState(false)
  
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setButtonText("Ordering...")

        setTimeout(() => {
            setOrderPlaced(true)
            setTimeout( ()=>{
                setButtonText("Place Order")
                setOrderPlaced(false)
                emptyCart()
            }, 2500)}
       , 3000
       )
    
    }



    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    )) 

    return (
        <main className="cart-page">
         
           <h2> {orderPlaced? "Order Placed successfully!" : "Check out"}</h2>
          
            {cartItemElements} 
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
        
                </div> :
                <p>You have no items in your cart.</p>
            }

            
           
           
        </main>
    )
}

export default Cart