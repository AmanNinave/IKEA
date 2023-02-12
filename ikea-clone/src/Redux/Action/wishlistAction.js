import { myStore } from "../Store"
export const wishlistAction=( elem , dispatch )=> {
    
    dispatch(
        {
            type : "ADD_TO_WISH",
            payload : elem
        }
    )
}
export const wishQtyAction=( elem , dispatch )=> {
    
        return myStore.dispatch(
            {
                type : "ADD",
                payload : elem
            }
        )
    }
export const wishSubAction=( elem , dispatch )=> {
    
        return myStore.dispatch(
            {
                type : "SUB",
                payload : elem
            }
        )
    }
    export const wishDeleteAction=( elem , dispatch )=> {
    
        return myStore.dispatch(
            {
                type : "DELETE",
                payload : elem
            }
        )
    }