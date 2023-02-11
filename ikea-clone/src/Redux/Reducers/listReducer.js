const initialData = {
    mainData : [] ,
    listData : [],
    
}

function listReducer ( state = initialData , action ) {
    if(action.type === "LIST"){
        console.log("List")
        return {
            ...state , listData : action.payload 
        }
    }else if(action.type === "FIRST"){
        console.log("first")
        return {
            ...state , listData : action.payload , mainData : action.payload
        }
    }

    return state;
}

export default listReducer;