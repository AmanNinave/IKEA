

const initialData = {
    cartData : JSON.parse(localStorage.getItem("CartData")) || [] 
}

function cartReducer ( state = initialData , action ) {
    if(action.type === "ADD_TO_CART"){
        localStorage.setItem("CartData" , JSON.stringify( [...state.cartData , action.payload ]  ))
        return {
            ...state , 
            cartData : [...state.cartData , action.payload ]
        }
        
    }
    else if(action.type==="ADD"){
       
        // localStorage.setItem("CartData" , JSON.stringify( state.cartData.filter((ele)=>{
        //                                                         if(action.payload==ele){
        //                                                             console.log(action.payload==ele)
        //                                                             return{
        //                                                                 ...ele, Qty:ele.Qty+=1    
        //                                                             }
        //                                                         }
        //                                                         else{
        //                                                             return ele
        //                                                         }
        //                                                     })  ))

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

        // localStorage.setItem("CartData" , JSON.stringify( state.cartData.filter((ele)=>{
        //                                                         if(action.payload==ele){
        //                                                             console.log(action.payload==ele)
        //                                                             return{
        //                                                                 ...ele, Qty:ele.Qty-=1
        //                                                             }
        //                                                         }

        //                                                         else{
        //                                                             return ele
        //                                                         }
        //                                                     })  ))

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
        localStorage.setItem("CartData" , JSON.stringify( state.cartData.filter((ele)=>{
                                                                if(action.payload==ele){
                                                                    console.log(action.payload==ele)
                                                                }
                                                                else{
                                                                    return ele
                                                                }
                                                            })  ))
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
    }else if(action.type === "QTY"){
        return {
            ...state , cartData : action.payload
        }
    }

    return state;
}

export default cartReducer;
