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
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos