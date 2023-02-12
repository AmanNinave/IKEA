import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
function PrivateRoutes({ children }) {
    const data = useSelector((storedData) => {
        return storedData.signupReducer;
    })

    return (data.Auth ? children : <Navigate to='/sign-in' />

    )
}

export default PrivateRoutes