import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Cart from '../cart'
import Sofa1 from '../ProductList/Sofa/Sofa1'
import Wishlist from '../wishlist'

function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/sign-in' element={<Login />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/product-page' element={<Sofa1 />}></Route>
                <Route path='/favourites' element={<Wishlist />}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes