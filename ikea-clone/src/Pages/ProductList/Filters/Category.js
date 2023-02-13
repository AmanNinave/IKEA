import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import listAction from '../../../Redux/Action/listAction';

const FilterStyle = {
    zIndex: "1",
    position: "absolute",
    top: "190px",
    left: "190px",
    border: "0px solid",
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "10px",
    width: "fitcontent"
}

const buttonStyle = {
    border: "0px",
    margin: "3px",
    backgroundColor: "white",
    fontSize: "18px"

}


function Category(props) {
    const data = [
        {
            title: "Sofa parts & accessories",
            value : "Sofa parts"

        },
        {
            title: "Extra covers",
            value : "covers"
        },
        {
            title: "Fabric sofas",
            value : "Fabric"
        },
        {
            title: "Modular sofas",
            value : "Modular"
        },
        {
            title: "Footstools & pouffes",
            value : "Footstools"
        },
        {
            title: "Lounging & relaxing furniture",
            value : "relaxing"
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
                                    let temp = false
                                        element.categoryPath.map((el) => {
                                            if(el.name.includes("parts")){
                                                temp = true;
                                            }
                                        })

                                 return temp;
                                })

                                listAction( pdtDta , dispatch);

                break;
            case data[1].title:   pdtDta =  productData.filter(( element , index )=> {
                                    let temp = false
                                        element.categoryPath.map((el) => {
                                            if(el.name.includes("covers")){
                                                temp = true;
                                            }
                                        })

                                return temp;
                                })

                                listAction( pdtDta , dispatch);

                break;
            case data[2].title:   pdtDta =  productData.filter(( element , index )=> {
                                let temp = false
                                    element.categoryPath.map((el) => {
                                        if(el.name.includes("Fabric")){
                                            temp = true;
                                        }
                                    })

                            return temp;
                            })

                            listAction( pdtDta , dispatch);

                break;
            case data[3].title:
                                pdtDta =  productData.filter(( element , index )=> {
                                    let temp = false
                                        element.categoryPath.map((el) => {
                                            if(el.name.includes("Modular")){
                                                temp = true;
                                            }
                                        })

                                return temp;
                                })

                                listAction( pdtDta , dispatch);
                break;
            case data[4].title:
                            pdtDta =  productData.filter(( element , index )=> {
                                let temp = false
                                    element.categoryPath.map((el) => {
                                        if(el.name.includes("Footstools")){
                                            temp = true;
                                        }
                                    })

                            return temp;
                            })

                            listAction( pdtDta , dispatch);
                    break;
            case data[5].title:
                            pdtDta =  productData.filter(( element , index )=> {
                                let temp = false
                                    element.categoryPath.map((el) => {
                                        if(el.name.includes("relaxing")){
                                            temp = true;
                                        }
                                    })

                            return temp;
                            })

                            listAction( pdtDta , dispatch);
                        break;
            default:
                break;
        }
    }

    return (
        <div style={FilterStyle} >

            {data.length > 0 &&
                data.map((ele, index) => {
                    return <div key={index}>
                        <button onClick={() => { handleFilter(ele) }} style={buttonStyle}> <input type="checkbox" name="aman" width="40px" /> {ele.title} </button>
                        <br />
                    </div>


                })

            }




        </div>

    );
}

export default Category;