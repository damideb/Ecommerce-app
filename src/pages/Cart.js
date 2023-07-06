import React, {useContext,useState}from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


    function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const[orderPlaced, setOrderPlaced] = useState(false)
    const {cartItems, emptyCart} = useContext(Context)
 
    const cartItemPrice = cartItems.map(item=> ( 
    item.price*item.quantity ))

    var priceSum = cartItemPrice.reduce(
        function(total, amount){
        return total + amount
    },0)

    const totalCostDisplay = priceSum.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    )) 

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            setOrderPlaced(true)
            setTimeout( ()=>{
                setButtonText("Place Order")
                setOrderPlaced(false)
                emptyCart()
            }, 1000)}
       , 2000
       )}


    return (
        <main className="cart-page">
           <h2> {orderPlaced? "Order Placed successfully!" : "Check out"}</h2>
         { cartItems.length>0 &&  <h6>Qty</h6>  }
            {cartItemElements} 
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
        
                </div> :
                <div>
                <p>You have no items in your cart.</p>
            <i className="goHomeText"> Go back to add items to cart</i>
            </div>
            }

            
           
           
        </main>
    )
}

export default Cart