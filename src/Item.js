import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from './Data'


function ItemDescription(props){
    const navigate = useNavigate()
   
    const{itemId} = useParams()
    const bagItem = data.find(item=> item.id===itemId)

    function handleClick(){
navigate('/')
    }
    return(
        <div>
            <h3>Product Information</h3>
            <p 
            className="arrow"
            onClick={handleClick}><span> <i className="ri-arrow-go-back-line" ></i></span>Go back to homePage</p>
           <img  src={bagItem.url}  alt='' className="bagItem"/>
           <p>${bagItem.price}</p>
           <button>Add to Cart</button>
        </div>
    )
}
export default ItemDescription