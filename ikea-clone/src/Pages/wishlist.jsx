import React from 'react'
import styles from "../Pages/cart.css"
import { HiShoppingCart } from "@react-icons/all-files/hi/HiShoppingCart"
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus"
import { HiArrowRight } from "@react-icons/all-files/hi/HiArrowRight"

import { useSelector, useDispatch } from 'react-redux'
import { myStore } from '../Redux/Store'
import { BiMinus } from "@react-icons/all-files/bi/BiMinus"
import { wishlistAction, wishQtyAction, wishSubAction, wishDeleteAction } from '../Redux/Action/wishlistAction'
import { cartAction } from '../Redux/Action/cartAction'


const Wishlist = () => {

    const wishdata = useSelector((store) => {
        return store.wishlistReducer.wishData
    })

    const dispatch = useDispatch();

    const cartdata = useSelector((store) => {
        return store.cartReducer.cartData
    })

    let isCart = false ;

    

    function addToCart ( elem  ) {  

        cartdata.map((element) => {
            if(element.id == elem.id){
                isCart = true;
                
            }
        })

        if( !isCart || cartdata.length == 0){
            cartAction({...elem  , Qty : 1 }, dispatch);
            
        }  

        wishDeleteAction(elem)

    } 
    


    var Totalprice = 0
    wishdata.map((ele, index) => {
        Totalprice += ele.Qty * ele.salesPrice.numeral
    })

    let isWishCart = false;

    const AddAllToCart = () => {

        wishdata.map ((wishelem) => {

            cartdata.map((element) => {
                if(element.id == wishelem.id){
                    isWishCart = true;  
                }
            })

            if( !isWishCart || cartdata.length == 0){
                cartAction({...wishelem  , Qty : 1 }, dispatch);
                
            }

            wishDeleteAction( wishelem )
        })


        

    }




    return (
        <div className='wishmain'>
            <div className="wishlist-container">
                <div className='wishlist-inner'>
                    <div></div>
                    <div className='wishbox'>
                        <div className=''>
                            <h1>Shoppinglist</h1>
                        </div>
                        <h4>...</h4>
                    </div>
                    {/* <div className="wishlistsave">
                        <h1>Save your lists</h1>
                        <p>Your lists are only temporary. Sign up or log in to make sure your lists are still here when you come back.</p>
                        <button>Sign up for Free</button>
                    </div> */}
                    <div className='buyonline'>
                        <button className='wishactive'>Buy online</button>
                        <button className='wishnotactive'>Buy in Store</button>
                    </div>
                    <div className="cartdiv">
                    {

                        wishdata.length > 0 &&
                        wishdata.map((ele, index) => {
                            return (
                                <div className="cartdivmain">
                                    <div className="cartimg">
                                        <img src={ele.contextualImageUrl} alt="" />
                                        <span>{ele.id}</span>
                                    </div>

                                    <div className="cartdetails">
                                        <div className='cartdetailsinner'>
                                            <h4>{ele.name}</h4>
                                            <p>{ele.typeName}</p>
                                            <div>
                                                {ele.colors.length > 0 &&
                                                    ele.colors.map((c) => {
                                                        return (
                                                            c.name
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <h5>{ele.salesPrice.current.prefix} {ele.salesPrice.numeral}</h5>
                                        <div className='cartproduct'>
                                            <div className='wishproductbutton'>
                                                <button onClick={() => (wishQtyAction(ele))}><AiOutlinePlus /></button>
                                                <button>{ele.Qty}</button>
                                                <button disabled={ele.Qty == 1} onClick={() => wishSubAction(ele)}><BiMinus style={{ color: "#000", fontSize: "22px" }} /></button>
                                            </div>
                                            <div className="wishsavebutton">
                                                <button onClick={() => wishDeleteAction(ele)}>Remove product</button>
                                                <button onClick={() => { addToCart( ele ); }} >Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                </div>
               
               

            </div>
            <div className="wish-summary">
                    <p>Wish list summary</p>
                    <div className='wishtotal'>
                        <span>Regular price:</span>
                        <h2> ₹ {Totalprice}</h2>
                    </div>
                    <h5>Want to buy these articles online?</h5>
                    <div className="wishdelivery">
                        <button><HiShoppingCart />  View Add all products to cart <span onClick={AddAllToCart}> <HiArrowRight style={ { color : "black"}}/></span></button>
                    </div>
                </div>
            <div className="cartempty">
                <div class="cartemptyinner">
                    <h2>Your bag is empty</h2>
                    <button type="button" class="" aria-label="Open context menu for shopping bag" data-testid="context_menu">...</button></div>
            </div>
            <div className="cartemptygo"style={{display:"none"}}>
                <div class="cartemptyinnergo">
                    <div>
                        <h2>Have an account?</h2>
                        <span><a href="">Join or log in</a>for a smoother checkout</span>
                    </div>
                    <span><i className=""></i></span>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
