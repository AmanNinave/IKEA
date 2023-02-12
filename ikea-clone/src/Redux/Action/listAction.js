function listAction( elem , dispatch ) {
    
    dispatch(
        {
            type : "LIST",
            payload : elem
            
        }
    )
}

export default listAction;