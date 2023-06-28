import React, {useContext} from "react";
import { useParams, useNavigate} from "react-router-dom";
import data from './Data'
import {Context} from './Context'



function ItemDescription(props){
    const navigate = useNavigate()

    const {addToCart,cartItems} = useContext(Context)
    const{itemId} = useParams()
    const bagItem = data.find(item=> item.id===itemId)

    function handleClick(){
        navigate('/')
            }

        function viewCart(){
            navigate('/cart')
        }

    const inCart = cartItems.some(item => item.id === bagItem.id)

    function doubleCheck(bagItem){
        if(inCart){
            viewCart()
        }
        else{
            addToCart(bagItem)
        }
    }
    
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
           <p className="bagPrice">${bagItem.price}</p>
           
           <button className="cartButton"
           onClick={()=>doubleCheck(bagItem)}
           >
            { inCart? "View In Cart" : "Add to Cart"}</button>
            
        </div>
    )
}
export default ItemDescription