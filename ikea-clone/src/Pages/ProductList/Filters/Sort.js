import React from 'react';


const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "260px",
    left: "80px",
    border: "0px solid",
    backgroundColor: "white",
    padding: "15px",
    borderRadius : "10px"
}

const buttonStyle = {
    border : "0px",
    margin : "3px",
    backgroundColor : "white",
    fontSize : "18px"

}


function Sort(props) {

    const data = [
        { 
            title : "Price : low to high"
        },
        { 
            title : "Price : high to low"
        },
        { 
            title : " Name "
        },
        { 
            title : "Best match"
        },
        { 
            title : "Newest"
        },
        { 
            title : "Most popular"
        },

    ]

    return (
        <div style={ FilterStyle } >

            { data.length > 0 && 
                    data.map(( ele )=> {
                        return <>
                            <button style={ buttonStyle }> <input type="radio" name = "aman" width="40px"/> {ele.title} </button>
                            <br />
                        </>
                            
                        
                    })

            }

            


        </div>

    );
}

export default Sort;