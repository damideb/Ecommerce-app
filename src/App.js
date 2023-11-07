import React from "react"
import {Routes, Route} from "react-router-dom"
import Frontpage from "./frontPage"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import ItemDescription from './Item'
import Layout from "./components/Layout"

function App() {    
   
    return (
        <div >
            <Routes>
                <Route  path='/'element={<Layout />}>
                    <Route  index element={<Frontpage />} />
                    <Route  path="items" element={<Photos />} />
                    <Route path="items/:itemId"  element={ <ItemDescription/>} />
                    <Route path="cart"  element={  <Cart />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App