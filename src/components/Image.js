import React,{useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
   

function Image({img,searchparams}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite} = useContext(Context)
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }}

    return (
        <div className="image-container" ref={ref}>
            <Link to= {img.id}
            state={{search:`?${searchparams.toString()}`}}>
                <img src={img.url} alt = 'Products' className="image-grid"/>
                </Link>
          {heartIcon()}
            
            <div className="imageText">
                <p className='priceList'> ${img.price}</p>
            <p className='rating'> 
           {img.ratings} <i className="ri-star-half-fill"></i></p>
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
