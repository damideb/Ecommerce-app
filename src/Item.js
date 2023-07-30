import React, { useContext, useState} from "react";
import { useParams, useNavigate} from "react-router-dom";
import data from './Data'
import {Context} from './Context'



function ItemDescription(){

     const{itemId} = useParams()
        const singleItem = data.find(item=> item.id===itemId)
            const {addToCart,cartItems} = useContext(Context)
                const[quantity,setQuantity] = useState(1)
                    const navigate = useNavigate()

  

function handleClick(){
        navigate('/items')
    
            }

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
            addToCart(Item)
        
        }
    }
    return;
    }


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
           <p 
            className="arrow"
            onClick={handleClick}><span> <i className="ri-arrow-go-back-line" ></i></span> Go back</p>
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
            value={quantity}
            onChange={(event)=>{
                setQuantity(parseInt(event.target.value))
            }}/>
            <p className="minus" onClick={minus}> - </p> 
           </div>
            
           { inCart?
           <button className="cartButton"
           onClick={()=>doubleCheck(singleItem)}
           >  View In Cart </button>
              :    <button className="cartButton" id="addItemButton"
              disabled={quantity < 1}
              onClick={()=>doubleCheck(singleItem)}
              >  Add To Cart </button> }
        </main>
    )
}
export default ItemDescription