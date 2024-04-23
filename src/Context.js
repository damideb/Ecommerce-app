
import React, {useState,useEffect} from "react";
import data from './Data';

const Context =React.createContext()

function ContextProvider (props){

    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || []
    console.log(savedCartItems)

    const [allPhotos, setAllPhotos] = useState([])
    const[cartItems, setCartItems] = useState(savedCartItems)


    useEffect(() => {
      let  isCurrent=true
      if(isCurrent){
        setAllPhotos(data)
      }
      return ()=>{
        isCurrent=false
      } 
        
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
        return photo
        })
        setAllPhotos(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
        const removeCart = cartItems.filter(item=> item.id !==id)
        localStorage.setItem('cart', JSON.stringify(removeCart))
        
    }

    function emptyCart() {
        setCartItems([])
        localStorage.removeItem('cart')
    }
    
    return(
    <Context.Provider value={{allPhotos,toggleFavorite, removeFromCart,
        addToCart, cartItems, emptyCart}}>
        {props.children}
    </Context.Provider>
    )
}
export {ContextProvider, Context}