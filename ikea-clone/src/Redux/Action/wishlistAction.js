import React from 'react';

function wishlistAction( elem , dispatch ) {
    
    dispatch({
        type : "WISHLIST",
        payload : elem
    })
}

export default wishlistAction;