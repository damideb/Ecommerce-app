
import React, {useState,useEffect} from "react";
import data from './Data';

const Context =React.createContext()

function ContextProvider (props){

const [allPhotos, setAllPhotos] = useState([])
const[cartItems, setCartItems] = useState([])


    useEffect(() => {
        setAllPhotos(data)
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
      
    }

    function emptyCart() {
        setCartItems([])
    }
    
    return(
        <Context.Provider value={{allPhotos,toggleFavorite, removeFromCart,addToCart, cartItems, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}