const initialData = {
    cartData : []
}

function cartReducer ( state = initialData , action ) {
    if(action.type === "CART"){
        return {
            ...state , cartData : [...state.cartData , action.payload ]
        }
    }
    return state;
}

export default cartReducer;