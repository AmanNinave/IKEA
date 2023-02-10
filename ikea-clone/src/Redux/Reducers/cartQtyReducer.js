const initialData = {
    cartData : []
}

function cartQtyReducer ( state = initialData , action ) {
    if(action.type === "QTY"){
        return {
              cartData : [...state.cartData , action.payload ]
        }
    }
    return state;
}

export default cartQtyReducer;
