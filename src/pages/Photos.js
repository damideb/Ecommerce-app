import React, {useContext, useState} from "react"

import Image from "../components/Image"
import {Context} from "../Context"


function Photos() {
    
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img) => (
        <Image key={img.id} img={img} />
    ))


    const[startIndex, setStartIndex] = useState(0)
    const[endIndex, setEndIndex] = useState(9)
    
  

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