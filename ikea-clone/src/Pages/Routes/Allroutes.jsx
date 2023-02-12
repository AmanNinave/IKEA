import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Signup/Signup'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Cart from '../cart'
import Sofa1 from '../ProductList/Sofa/Sofa1'
import Wishlist from '../wishlist'
import Payment from '../Payment/Payment'
import PrivateRoutes from './PrivateRoutes'
function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/sign-in' element={<Login />}></Route>
                <Route path='/cart' element={<PrivateRoutes><Cart /></PrivateRoutes>}></Route>
                <Route path='/product-page' element={<Sofa1 />}></Route>
                <Route path='/favourites' element={ <PrivateRoutes><Wishlist/></PrivateRoutes>}></Route>
                <Route path='/delivery' element= {  <PrivateRoutes><Payment/></PrivateRoutes> }/>
                <Route path='/favourites' element={<PrivateRoutes><Wishlist /></PrivateRoutes>}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes