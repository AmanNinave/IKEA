import React from "react";
import './Sofa1.css'
import Sofadata from './../../../JsonFiles/sofa1.json'
import heart from './../../../Logo/heart.png'
import cart from './../../../Logo/shopping-cart.png'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
</style>


function Sofa1() {

    console.log(Sofadata.moreProducts.productWindow);

    const dta = Sofadata.moreProducts.productWindow;

    return (
        <div  >

            <div className="Filters_productList" style={{ height: "120px" , border : "1px solid black" }}>

                <button>Sort</button>
                <button>Number of Seats</button>
                <button>Category</button>
                <button>Price</button>
                <button>Shape</button>
                <button>All Filters</button>

            </div>

            <div style={{ display : "grid" , gridTemplateColumns : "1fr 1fr 1fr 1fr" , gap : "10px"}}>

                {
                        dta.map((elem) => {
                            return (
                                <div key={elem.id} style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" , padding : "10px"  }}> 
                                    <img src={elem.mainImageUrl} alt={elem.mainImageAlt} width="200px" height="200px" />
                                    <h3>{elem.name}</h3>
                                    <p>{elem.typeName}</p>
                                    <h2><span style={{fontSize : "15px"  }}>{elem.salesPrice.current.prefix}</span>{elem.salesPrice.current.wholeNumber}</h2>
                                    <img src={cart} alt="" width="30px" style={{ marginRight : "10px"  }}/>
                                    <img src={heart} alt="" width="25px" />
                                    

                                </div>
                             )
                        })
                }

            </div>

        </div>
    )
}


export default Sofa1;