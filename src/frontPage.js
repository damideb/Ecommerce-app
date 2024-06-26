import React from 'react'
import { useNavigate} from "react-router-dom"

function Frontpage(){
    const navigate = useNavigate()

    function handleClick(){
        navigate('/items')
    }

    return(
        <div>
            <div className="homepage">
                <div className='imageFlex'>
                <div className="bodyText" >
                    <h2>Made with love.Designed just for YOU</h2>
                    <p>Finding the perfect accessories to match your outfit? try us out and get product shipped right to your door</p>
                </div> 
            <button className="exploreButton"
                onClick={handleClick}
            >Explore</button>
            </div>
            <div className='imageDiv'>
            </div>
            </div>
        </div>
    )
}
export default Frontpage