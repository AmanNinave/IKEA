import React from 'react';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "260px",
    left: "530px",
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


function Price (props) {
    const data = [
        { 
            title : " ₹0 - 19,999 "
        },
        { 
            title : "₹20,000 - 39,999"
        },
        { 
            title : "₹40,000 - 59,999"
        },
        { 
            title : "₹60,000 - 79,999"
        },
        { 
            title : "₹80,000 - 99,999"
        },
        { 
            title : "₹80,000 +  "
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

export default Price;