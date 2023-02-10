import React from 'react';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "260px",
    left: "380px",
    border: "1px solid",
    backgroundColor: "white",
    padding: "15px",
    borderRadius : "10px",
    width : "fitcontent"
}

const buttonStyle = {
    border : "0px",
    margin : "3px",
    backgroundColor : "white",
    fontSize : "18px"

}


function Category(props) {
    const data = [
        { 
            title : "Sofa parts & accessories"
        },
        { 
            title : "Extra covers"
        },
        { 
            title : "Fabric sofas"
        },
        { 
            title : "Modular sofas"
        },
        { 
            title : "Footstools & pouffes"
        },
        { 
            title : "Lounging & relaxing furniture"
        },

    ]

    return (
        <div style={ FilterStyle } >

            { data.length > 0 && 
                    data.map(( ele )=> {
                        return <>
                            <button style={ buttonStyle }> <input type="checkbox" name = "aman" width="40px"/> {ele.title} </button>
                            <br />
                        </>
                            
                        
                    })

            }

            


        </div>

    );
}

export default Category;