import React, { useContext, useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import data from './Data'
import {Context} from './Context'



function ItemDescription(props){
    const{itemId} = useParams()
    const bagItem = data.find(item=> item.id===itemId)
    const {addToCart,cartItems} = useContext(Context)
    const[quantity,setQuantity] = useState(1)
  
 
    const navigate = useNavigate()

  

function handleClick(){
        navigate('/')
    
            }

function viewCart(){
            navigate('/cart')
        }

    const inCart = cartItems.some(item => item.id === bagItem.id)

function doubleCheck(bagItem){
    bagItem.quantity = quantity
        if(inCart){
            viewCart()
        }
        else{
            addToCart(bagItem)
        
        }
        
    }


function sum(){
 return  setQuantity(quantity + 1)
}

function minus(){
    if(quantity>0){
    return  setQuantity(quantity  -1)
}}

    return(
        <div>
           <img  src={bagItem.url}  alt='' className="bagItem"/>
           <p 
            className="arrow"
            onClick={handleClick}><span> <i className="ri-arrow-go-back-line" ></i></span> Go back</p>
                <span className='bagRating'> 
           {bagItem.ratings} <i className="ri-star-half-s-line"></i>
           <i className="ri-star-half-s-line"></i>
           <i className="ri-star-half-s-line"></i>
           <i className="ri-star-half-s-line"></i>
           </span>
           <p className="bagPrice">${bagItem.price*quantity}</p>
           <div className="quantity">
           <p className="qty">Qty:</p>
         
            <p className="plus" onClick={sum}>+</p>
            <p className="number">{quantity}</p>
            <p className="minus" onClick={minus}> - </p>
           
           </div>
            
           <button className="cartButton"
           onClick={()=>doubleCheck(bagItem)}
           >
            { inCart? "View In Cart" : "Add to Cart"}</button>
            
        </div>
    )
}
export default ItemDescription