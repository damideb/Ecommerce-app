import {useState, useEffect, useRef} from "react"

function useHover(){

const[hovered, setHovered] = useState(false)
const ref = useRef(null)

function enter(){
    setHovered(true)
}
function leave(){
    setHovered(false)
}

useEffect(()=>{
    var Reference= ref.current 
    ref.current.addEventListener(onmouseenter, enter)
    ref.current.addEventListener(onmouseleave, leave)

    return () => {   
       
        Reference.removeEventListener("mouseenter", enter)
        Reference.removeEventListener("mouseleave", leave)
    }
}, []
)

return(
[hovered,  ref]
)}

export default useHover