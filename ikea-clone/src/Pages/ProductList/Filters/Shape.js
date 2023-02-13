import React from 'react';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "190px",
    left: "450px",
    border: "0px solid",
    backgroundColor: "white",
    padding: "15px",
    borderRadius : "10px",
    width : "200px"
    , overflow : "auto"
}

const buttonStyle = {
    border : "0px",
    margin : "3px",
    backgroundColor : "white",
    fontSize : "18px"

}


function Shape (props) {
    const data = [
        { 
            title : " Standard "
        },
        { 
            title : "L-shaped"
        },
        { 
            title : "Modular"
        },
        { 
            title : "Corner"
        },
        { 
            title : "Free shape"
        }

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

export default Shape;