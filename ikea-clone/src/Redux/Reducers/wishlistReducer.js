const initialData = {
    wishData : JSON.parse(localStorage.getItem("WishlistData")) || [] 
}

function wishlistReducer ( state = initialData , action ) {
    if(action.type === "ADD_TO_WISH"){

        localStorage.setItem("WishlistData" , JSON.stringify( [...state.wishData , action.payload ]  ))

        return {
            ...state , 
            wishData : [...state.wishData , action.payload ]
        }
    }
    else if(action.type==="ADD"){
        // localStorage.setItem("WishlistData" , JSON.stringify( state.wishData.filter((ele)=>{
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
            wishData:state.wishData.filter((ele)=>{
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
        // localStorage.setItem("WishlistData" , JSON.stringify( state.wishData.filter((ele)=>{
        //                                                             if(action.payload==ele){
        //                                                                 console.log(action.payload==ele)
        //                                                                 return{
        //                                                                     ...ele, Qty:ele.Qty-=1
        //                                                                 }
        //                                                             }

        //                                                             else{
        //                                                                 return ele
        //                                                             }
        //                                                         })  ))
        return{
            ...state,
            wishData:state.wishData.filter((ele)=>{
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
        localStorage.setItem("WishlistData" , JSON.stringify( state.wishData.filter((ele)=>{
                                                                    if(action.payload==ele){
                                                                        console.log(action.payload==ele)
                                                                    }
                                                                    else{
                                                                        return ele
                                                                    }
                                                                })  ))
        return{
            ...state,
            wishData:state.wishData.filter((ele)=>{
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

export default wishlistReducer;
