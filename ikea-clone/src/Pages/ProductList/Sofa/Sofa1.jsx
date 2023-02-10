import React from "react";
import './Sofa1.css'
import Sofadata from './../../../JsonFiles/sofa1.json'

import Filters from "../Filters/Filters";
import ItemBox from "../ItemBox";

function Sofa1() {

    const dta = Sofadata.moreProducts.productWindow;
    
    return (
        <div id="product-list" style={ {width  : "90%" , margin :"auto"  }} >

            <Filters/>
            
            <div style={{ display : "grid" , gridTemplateColumns : "1fr 1fr 1fr 1fr" , gap : "10px"  }}>

                {
                        dta.map((elem , index ) => {
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