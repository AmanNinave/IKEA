import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listAction from '../../../Redux/Action/listAction';
import listSortAction from '../../../Redux/Action/listFirstAction';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "190px",
    left: "80px",
    border: "0px solid",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px"
}

const buttonStyle = {
    border: "0px",
    margin: "3px",
    backgroundColor: "white",
    fontSize: "18px"

}


function Sort(props) {

    const data = [
        {
            title: "Price : low to high"
        },
        {
            title: "Price : high to low"
        },
        {
            title: "Name"
        },
        {
            title: "Best match"
        },
        {
            title: "Newest"
        },
        {
            title: "Most popular"
        },

    ]

    const productData = useSelector((productlist) => {
        return productlist.listReducer.listData
    });

    const dispatch = useDispatch();

    const handleFilter = (ele) => {
        switch (ele.title) {
            case "Price : low to high": productData.sort(function (a, b) {
                                            return a.salesPrice.numeral - b.salesPrice.numeral;
                                        })

                                        listAction(productData.slice(), dispatch);

                break;
            case "Price : high to low": productData.sort(function (a, b) {
                                            return  b.salesPrice.numeral - a.salesPrice.numeral;
                                        })

                                        listAction(productData.slice(), dispatch);

                break;
            case "Name":   productData.sort(function (a, b) {
                                if (a.name > b.name) { return 1; }
                                if (a.name < b.name) { return -1; }
                                else { return 0; };
                        
                            })
                            listAction(productData.slice(), dispatch);
                break;

            default:
                break;
        }
    }

    return (
        <div style={FilterStyle} >

            {data.length > 0 &&
                data.map((ele , index) => {
                    return < div key={index+1} >
                        <button  onClick={() => { handleFilter(ele) }} style={buttonStyle}> <input type="radio" name="aman" width="40px" /> <label >{ele.title}</label>  </button>
                        <br />
                    </div>


                })

            }




        </div>

    );
}

export default Sort;