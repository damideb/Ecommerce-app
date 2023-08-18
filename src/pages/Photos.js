import React, {useContext, useState} from "react"
import {useSearchParams,Link} from "react-router-dom"
import Image from "../components/Image"
import {Context} from "../Context"


function Photos() {
    const[searchparams] = useSearchParams()
    const[startIndex, setStartIndex] = useState(0)
    const[endIndex, setEndIndex] = useState(9)
    const {allPhotos} = useContext(Context)

    const typeFilter = searchparams.get('category')


    const photosType= typeFilter? allPhotos.filter(photo=> photo.type===typeFilter
 ): allPhotos

    const imageElements = photosType.map((img) => (
        <Image key={img.id} img={img} searchparams={searchparams}/>
    ))

 function next(){
    if(imageElements.length > endIndex){
        setStartIndex(startIndex+9)
        setEndIndex(endIndex + 9)
        window.scrollTo(0,0)  
    }
 }

 function previous(){
    if( startIndex > 0 ){
        window.scrollTo(0,0)
        setStartIndex(startIndex- 9)
        setEndIndex(endIndex - 9)
    }
 }
   
    return (
        <div>
              <div className="dropdown-parent">
    <h4 className="categories">CATEGORIES</h4>
    <ul  className="dropdown">
            <Link to="?category=bag"><li>Bags </li></Link>
            <Link to="?category=shoes"><li>Shoes </li></Link>
            <Link to="?category=sunglasses"> <li>Sunglasses </li></Link>
            <Link to="."
    relative="path"><li>All </li></Link>
            </ul>
    </div>
        <main className="photos">
            {imageElements.slice(startIndex,endIndex)}
        </main>
        <div className="direction">
        <button className="previous" 
        onClick={previous}
        >&laquo; </button>
            <button className="next"
        onClick={next}
        > &raquo;</button>
        </div>
        </div>
    )
}
export default Photos