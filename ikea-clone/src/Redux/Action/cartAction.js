// import * as actionTypes from "../Action/cartActiontypes"

//  export const Addcart=(itemId)=>{
//      return {
//         type:actionTypes.ADD_TO_CART,
//         payload:{
//             id:itemId
//         }
//      }

//  }
 
//  export const removeCart=(itemId)=>{
//     return {
//        type:actionTypes.REMOVE_FROM_CART,
//        payload:{
//            id:itemId
//        }
//     }

// }

// export const adjustqty=(itemId, value)=>{
//     return {
//        type:actionTypes.ADJUST_QTY,
//        payload:{
//            id:itemId,
//            qty:value
//        }
//     }

// }

// export const currentItem=(item)=>{
//     return {
//        type:actionTypes.LOAD_CURRENT_ITEM,
//        payload:{
//            id:item
//        }
//     }

// }


import { myStore } from "../Store"
export const cartAction=( elem , dispatch )=> {
    
    dispatch(
        {
            type : "ADD_TO_CART",
            payload : elem
        }
    )
}
export const cartQtyAction=( elem , dispatch )=> {
    
        return myStore.dispatch(
            {
                type : "ADD",
                payload : elem
            }
        )
    }
export const cartSubAction=( elem , dispatch )=> {
    
        return myStore.dispatch(
            {
                type : "SUB",
                payload : elem
            }
        )
    }
    export const cartDeleteAction=( elem , dispatch )=> {
    
        return myStore.dispatch(
            {
                type : "DELETE",
                payload : elem
            }
        )
    }
