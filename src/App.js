import React from "react"
import {Routes, Route} from "react-router-dom"
import Frontpage from "./frontPage"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import ItemDescription from './Item'

function App() {    
   
    return (
        <div >
            
            <Header />
            <Routes >
            <Route  exact path="/" element={<Frontpage />} />
                <Route  path="/items" element={<Photos />} />
                <Route path="/item/:itemId"  element={ <ItemDescription/>} />
                <Route path="/cart"  element={  <Cart />} />
                  
            </Routes>
        </div>
    )
}

export default App