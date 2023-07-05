import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"


function Photos() {
    const {allPhotos} = useContext(Context)

    console.log(allPhotos)
    
    const imageElements = allPhotos.map((img) => (
        <Image key={img.id} img={img} />
    ))

 

   

    
    return (
        <div>
        <main className="photos">
            {imageElements}
        </main>
        <div className="direction">
        <button className="previous">&laquo; Previous</button>
        <button className="next"
        > next &raquo;</button>
        </div>
        </div>
    )
}

export default Photos