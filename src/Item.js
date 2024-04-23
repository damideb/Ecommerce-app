import React, { useContext, useState, useEffect} from "react";
import { useParams, useNavigate, useLocation, Link} from "react-router-dom";
import data from './Data'
import {Context} from './Context'
import FlyingButton from 'react-flying-item'

function ItemDescription(){

    const [loading, setLoading] = useState(false)
    const{itemId} = useParams()
    const singleItem = data.find(item=> item.id===itemId)
    const {addToCart,cartItems} = useContext(Context)
    const[quantity,setQuantity] = useState(1)
    const navigate = useNavigate()
    const location=useLocation()
    const search = (location.state && location.state.search) || ""

    function viewCart(){
        navigate('/cart')
    }

    const inCart = cartItems.some(item => item.id === singleItem.id)

    function doubleCheck(Item){
        Item.quantity = quantity
        if(quantity>0){
            if(inCart){
                viewCart()
            }
            else{
                setLoading(true)
                setTimeout(()=>{
                    addToCart(Item)
                    setLoading(false)
                   },1000) 
                
            }
        }
         return;
    }

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    function sum(){
        setQuantity(quantity + 1)   
    }

    function minus(){
        if(quantity > 1){
          setQuantity(quantity  -1)
    }}

    return(
        <main className="singleItem">
            <img  src={singleItem.url}  alt='' className="bagItem"/>
            <Link to={`..${search}`} relative="path">
                <p className="arrow">
                    <span> <i className="ri-arrow-go-back-line" ></i></span> 
                    Go back</p>
            </Link>
            <span className='bagRating'> 
                {singleItem.ratings} <i className="ri-star-half-s-line"></i>
                <i className="ri-star-half-s-line"></i>
                <i className="ri-star-half-s-line"></i>
                <i className="ri-star-half-s-line"></i>
            </span>
           <p className="bagPrice">${quantity>0 &&  singleItem.price*quantity}</p>
           <div className="quantity">
                <p className="qty">Qty:</p>
                <p className="plus" onClick={sum}>+</p>
                <input className="number"
                        type="number"
                        inputMode="numeric"
                        value={quantity}
                        onChange={(event)=>{
                        setQuantity(parseInt(event.target.value))
                        if(event.target.value=== ""){
                        setQuantity("") }}}
                />
                <p className="minus" onClick={minus}> - </p> 
           </div>
           {inCart?
                <button className="cartButton"
                        onClick={()=>doubleCheck(singleItem)}
                >  View In Cart </button>
              :  <div onClick={()=>doubleCheck(singleItem)}>
                    <FlyingButton 
                            src={singleItem.url}
                            targetLeft={'95%'}
                            targetTop={'5%'}
                            > 
                            <button className="cartButton" id="addItemButton"  
                            disabled={quantity < 1 || loading}>{loading? 'Adding...': "Add To Cart"}  </button>
                    </FlyingButton> 
                </div>
            }
        </main>
    )
}
export default ItemDescription