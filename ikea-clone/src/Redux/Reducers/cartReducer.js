const initialData = {
    cartData : []
}

function cartReducer ( state = initialData , action ) {
    if(action.type === "ADD_TO_CART"){
        return {
            ...state , 
            cartData : [...state.cartData , action.payload ]
        }
    }
    else if(action.type==="ADD"){
        console.log(action.payload)
        return{
            ...state,
            cartData:state.cartData.filter((ele)=>{
                if(action.payload==ele){
                    console.log(action.payload==ele)
                    return{
                        ...ele, Qty:ele.Qty+=1
                        
                    }
                }

                else{
                    return ele
                }
            })
        }
    }
    else if(action.type==="SUB"){
        return{
            ...state,
            cartData:state.cartData.filter((ele)=>{
                if(action.payload==ele){
                    console.log(action.payload==ele)
                    return{
                        ...ele, Qty:ele.Qty-=1
                    }
                }

                else{
                    return ele
                }
            })
        }
    }
    else if(action.type==="DELETE"){
        console.log(action.payload)
        return{
            ...state,
            cartData:state.cartData.filter((ele)=>{
                if(action.payload==ele){
                    console.log(action.payload==ele)
                }
                else{
                    return ele
                }
            })
        }
    }
    return state;
}

export default cartReducer;
