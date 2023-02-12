import React, { useEffect, useState } from "react";
import './Sofa1.css'
import Sofadata from './../../../JsonFiles/sofa1.json'
import BedData from './../../../JsonFiles/bed1.json'

import Filters from "../Filters/Filters";
import ItemBox from "../ItemBox";
import listAction from "../../../Redux/Action/listAction";
import { useDispatch, useSelector } from "react-redux";

import listFirstAction from "../../../Redux/Action/listFirstAction";
function Sofa1() {

    const dta = BedData.moreProducts.productWindow;
    const dispatch = useDispatch();

    useEffect(()=>{
        listFirstAction( JSON.parse(localStorage.getItem("ProductData"))  , dispatch );
    },[])

   
  
    let showData = useSelector((storeData ) => {
        
        return storeData.listReducer.listData;
    })

   

    // if( showData.length == 0 ){

    //     showData = JSON.parse(localStorage.getItem("ProductData"));
    // }
    
    return (
        
        <div id="product-list" style={ {width  : "90%" , margin :"auto"  }} >

            <Filters/>
            
            <div id="listGrid" style={{ display : "grid"  , gap : "10px"  }}>

                { showData.length > 0 && 

                        showData.map((elem , index ) => {
                            return (
                                <ItemBox elem={elem} key = {index+1}/>
                             )
                        })
                }

            </div>

        </div>
    )
}

// aman
export default Sofa1;