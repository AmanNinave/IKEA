import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import listAction from '../../../Redux/Action/listAction';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "190px",
    left: "330px",
    border: "0px solid",
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
            title : "₹1,00,000 +  "
        },

    ]

    const productData = useSelector((productlist) => {
        return productlist.listReducer.listData
    });

    const dispatch = useDispatch();

    const handleFilter = (ele) => {
        let pdtDta;
        switch (ele.title) {
            case data[0].title:   pdtDta =  productData.filter(( element , index )=> {
                                    
                                 return element.salesPrice.numeral < 20000 ;
                                })

                                listAction( pdtDta , dispatch);

                break;
            case data[1].title:   pdtDta =  productData.filter(( element , index )=> {
                                    let temp = element.salesPrice.numeral
                                    return temp >=  20000 && temp <40000 ;
                                })

                                listAction( pdtDta , dispatch);

                break;
            case data[2].title:   pdtDta =  productData.filter(( element , index )=> {
                                    let temp = element.salesPrice.numeral
                                    return temp >=  40000 && temp < 60000 ;
                                })

                                listAction( pdtDta , dispatch);

                break;
            case data[3].title:
                                pdtDta =  productData.filter(( element , index )=> {
                                    let temp = element.salesPrice.numeral
                                    return temp >=  60000 && temp < 80000 ;
                                })

                                listAction( pdtDta , dispatch);
                break;
            case data[4].title:
                            pdtDta =  productData.filter(( element , index )=> {
                                let temp = element.salesPrice.numeral
                                    return temp >=  80000 && temp < 100000 ;
                            })

                            listAction( pdtDta , dispatch);
                    break;
            case data[5].title:
                            pdtDta =  productData.filter(( element , index )=> {
                                let temp = element.salesPrice.numeral
                                    return temp >=  100000 ;
                            })

                            listAction( pdtDta , dispatch);
                        break;
            default:
                break;
        }
    }


    

    return (
        <div style={ FilterStyle } >

            { data.length > 0 && 
                    data.map(( ele )=> {
                        return <>
                            <button  onClick={() => { handleFilter(ele) }} style={ buttonStyle }> <input type="checkbox" name = "aman" width="40px"/> {ele.title} </button>
                            <br />
                        </>
                            
                        
                    })

            }

            


        </div>

    );
}

export default Price;