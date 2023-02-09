import React from 'react'
import Signup from '../Signup/Signup'
import { Route, Routes } from 'react-router-dom'

function Allroutes() {
    return (
        <div>
            <Routes>
                <Route path='signup' element={<Signup />}></Route>
            </Routes>
        </div>
    )
}

export default Allroutes