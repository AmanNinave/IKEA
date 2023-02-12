function listFirstAction( elem , dispatch ) {
    
    dispatch(
        {
            type : "FIRST",
            payload : elem
            
        }
    )
}

export default listFirstAction;