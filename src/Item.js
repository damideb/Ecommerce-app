import React, {useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Context} from "./Context"


function ItemDescription(props){
    const navigate = useNavigate()
    const{allPhotos} = useContext(Context)
    const{itemId} = useParams()
    const bagItem = allPhotos.find(item=> item.id===itemId)

    function handleClick(){
navigate('/')
    }
    return(
        <div>
            <h3>Product Information</h3>
            <p onClick={handleClick}><span> <i className="ri-arrow-go-back-line" ></i></span>Go back to homePage</p>
           <img  src={bagItem.url}  alt='' className="bagItem"/>
           <p>${bagItem.price}</p>
           <button>Add to Cart</button>
        </div>
    )
}
export default ItemDescription