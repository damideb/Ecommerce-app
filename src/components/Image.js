import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
   

function Image({img}) {
    const [hovered, ref] = useHover()
 
    const {toggleFavorite, cartItems, addToCart,removeFromCart} = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }}

        
        function cartIcon() {
            const alreadyInCart = cartItems.some(item => item.id === img.id)
            if(alreadyInCart) {
                return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
            } else if(hovered) {
                return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
            }
        }
        
    

    return (
        <div className="image-container" ref={ref}>
            <Link to= {`/item/${img.id}`}><img src={img.url} alt = 'Products' className="image-grid"/></Link>
          {heartIcon()}
            {cartIcon ()}
            <div className="imageText">
                <p className='priceList'> ${img.price}</p>
            <span className='rating'> 
           {img.ratings} <i className="ri-star-half-fill"></i></span>
            </div>
            
                
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}


export default Image
