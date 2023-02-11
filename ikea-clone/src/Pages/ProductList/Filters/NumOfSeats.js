import React from 'react';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "210px",
    left: "180px",
    border: "0px solid",
    backgroundColor: "white",
    padding: "15px",
    borderRadius : "10px",
    width : "200px"
}

const buttonStyle = {
    border : "0px",
    margin : "3px",
    backgroundColor : "white",
    fontSize : "18px"

}


function NumOfSeats(props) {
    const data = [
        { 
            title : "   1 Seat"
        },
        { 
            title : "   2 Seat"
        },
        { 
            title : "   3 Seat"
        },
        { 
            title : "   4 Seat"
        },
        { 
            title : "   5 Seat"
        },
        { 
            title : "   6 Seat"
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

export default NumOfSeats;