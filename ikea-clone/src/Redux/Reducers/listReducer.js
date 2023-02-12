const initialData = {
    mainData : JSON.parse(localStorage.getItem("ProductData")) || [] ,
    listData :   [],
    
}
   
function listReducer ( state = initialData , action ) {
    if(action.type === "LIST"){
        console.log("List")
        return {
            ...state , listData : action.payload 
        }
    }else if(action.type === "FIRST"){
        
        localStorage.setItem("ProductData" , JSON.stringify(action.payload)) ;

        return {
            ...state , listData : action.payload , mainData : action.payload
        }
    }

    return state;
}

export default listReducer;