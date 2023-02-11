const initialData = {
    wishlistData : [],
    Qty:0
}

function wishlistReducer (state  = initialData , action ) {
    if(action.type === "WISHLIST"){
        return {
            ...state , 
            wishlistData : [...state.wishlistData , action.payload ]
        }
    }
    return state ;
}

export default wishlistReducer;