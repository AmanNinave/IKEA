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
