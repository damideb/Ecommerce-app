import React, {useContext, useState} from "react"

import Image from "../components/Image"
import {Context} from "../Context"


function Photos() {
    
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((img) => (
        <Image key={img.id} img={img} />
    ))


    const[startIndex, setStartIndex] = useState(0)
    const[endIndex, setEndIndex] = useState(10)
    
  

 function next(){
    
    if(imageElements.length > endIndex){
      
        setStartIndex(startIndex+10)
        setEndIndex(endIndex+10)
        window.scrollTo(0,0)

       

        
    }
   
 }

 function previous(){
    if( startIndex > 0 ){
        window.scrollTo(0,0)
        setStartIndex(startIndex- 10)
        setEndIndex(endIndex - 10)
    
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
        >&laquo; Previous</button>
       
            <button className="next"
        onClick={next}
        > next &raquo;</button>
        
    
        
        </div>
        </div>
    )
}

export default Photos