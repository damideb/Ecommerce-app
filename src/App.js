import React from "react"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import ItemDescription from './Item'

function App() {    
   
    return (
        <div >
            <Header />
            <Routes >
                <Route exact path="/" element={<Photos />} />
                <Route path="/cart"  element={  <Cart />} />
                <Route path="/item/:itemId"  element={ <ItemDescription/>} />
                  
            </Routes>
        </div>
    )
}

export default App