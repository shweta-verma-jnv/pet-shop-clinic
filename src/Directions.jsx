import React from 'react'
import Products from './Products'
import Signup from './Signup'
import Cart from './Cart'
import Features from './Features'
import About from './About'


import {Route,Routes} from "react-router-dom"
import Signin from './Signin'
import Pricing from './Pricing'
import Contact  from './Contact'


const Directions = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) =>
{
    //console.log(({productItems}.productItems)[1].name);
    return( 
    <div>
        <Routes>
            <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/features" element={<Features/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/about" element = {<About/>}/>
            <Route path="/Contact" element = {<Contact/>}/>
            <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
        </Routes>
    </div>
    )
} 
//<Route path="/" element={<Products productItems={productItems}/>}/>
export default Directions;