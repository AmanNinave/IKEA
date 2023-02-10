import React from 'react';
import { HiShoppingCart } from "@react-icons/all-files/hi/HiShoppingCart"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { FiChevronDown } from "@react-icons/all-files/fi/FiChevronDown"

import cartAction from "./../../Redux/Action/cartAction";
import { useDispatch , useSelector  } from 'react-redux'
import wishlistAction from "./../../Redux/Action/wishlistAction";

function ItemBox({elem}) {

    const dispatch = useDispatch();

    const storeData = useSelector((store) => {
            return store
    })
    function addToCart ( elem ) {
        cartAction({...elem , Qty : 1 }, dispatch);
    } 
    function addToWishlist ( elem ) {
        wishlistAction({...elem , Qty : 1 } , dispatch );
    }

    return (
        <div key={elem.id} style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "15px 15px 20px", width: "98%", margin: "auto" }}>
            <img src={elem.mainImageUrl} alt={elem.mainImageAlt} width="100%" height="200px" />
            <h5 style={{ fontSize: "18px", marginBottom: "3px" }}>{elem.name}</h5>
            <p style={{ marginBottom: "3px" }}>{elem.typeName}</p>
            <h4><span style={{ fontSize: "15px" }}>{elem.salesPrice.current.prefix}</span>{elem.salesPrice.current.wholeNumber}</h4>

            <span style={{ marginRight: "20px" }} onClick={() => {
                addToCart(elem);
            }}> <HiShoppingCart />  </span>

            <span onClick={() => {
                addToWishlist(elem);
            }} > <AiOutlineHeart /> </span>


        </div>
    );
}

export default ItemBox;