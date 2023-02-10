const initialData = {
    cartData : []
}

function cartReducer ( state = initialData , action ) {
    if(action.type === "CART"){
        return {
            ...state , cartData : [...state.cartData , action.payload ]
        }
    }
    else if(action.type==="INCREMENT"){
        let updateCart=state.item.map((curElm)=>{
            if(curElm.id===action.payload){
                return {
                    ...state, 
                }
            }
        })
        return {
            
        }
    }
    return state;
}

export default cartReducer;
