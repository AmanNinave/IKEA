import React from 'react';


function cartAction( elem , dispatch ) {
    
    dispatch(
        {
            type : "CART",
            payload : elem
        }
    )
}

export default cartAction;