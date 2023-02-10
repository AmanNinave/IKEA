import React from "react";
import './Sofa1.css'
import Sofadata from './../../../JsonFiles/sofa1.json'
import heart from './../../../Logo/heart.png'
import cart from './../../../Logo/shopping-cart.png'
import cartAction from "../../../Redux/Action/cartAction";
import { useDispatch , useSelector  } from 'react-redux'
import wishlistAction from "../../../Redux/Action/wishlistAction";

function Sofa1() {

    console.log(Sofadata.moreProducts.productWindow);

    const dta = Sofadata.moreProducts.productWindow;

    const dispatch = useDispatch();

    const storeData = useSelector((store) => {
            return store
    })

    function addToCart ( elem ) {
        cartAction(elem , dispatch);
    } 

    function addToWishlist ( elem ) {
        wishlistAction(elem , dispatch );
    }

    return (
        <div  >

            <div className="Filters_productList" style={{  }}>

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
                                    <img src={cart} alt="" width="30px" style={{ marginRight : "10px"  }}   onClick={() => {
                                        addToCart(elem);
                                    }}/>
                                    <img src={heart} alt="" width="25px" onClick={() => {
                                        addToWishlist(elem) ;
                                    }}/>
                                    

                                </div>
                             )
                        })
                }

            </div>

        </div>
    )
}

// aman
export default Sofa1;