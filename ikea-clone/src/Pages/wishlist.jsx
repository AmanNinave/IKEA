import React from 'react'
import styles from "../Pages/cart.css"
import { HiShoppingCart } from "@react-icons/all-files/hi/HiShoppingCart"
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus"
import { useSelector, useDispatch } from 'react-redux'
import { myStore } from '../Redux/Store'
import { wishlistAction, wishQtyAction, wishSubAction, wishDeleteAction } from '../Redux/Action/wishlistAction'



const Wishlist = () => {
    const wishdata = useSelector((store) => {
        return store.wishlistReducer.wishData
      })
      console.log(wishdata)
    //   var Totalprice = 0
    //   wishdata.map((ele, index) => {
    //     Totalprice += ele.Qty * ele.salesPrice.numeral
    //   })
    return (
        <div>
            <div className="wishlist-container">
                <div className='wishlist-inner'>
                    <div className='wishbox'>
                        <div className=''>
                            <h1>Shoppinglist</h1>
                            <p>Manage your <a href="">shopping lists</a></p>
                        </div>
                        <h4>...</h4>
                    </div>
                    <div className="wishlistsave">
                        <h1>Save your lists</h1>
                        <p>Your lists are only temporary. Sign up or log in to make sure your lists are still here when you come back.</p>
                        <button>Sign up for Free</button>
                    </div>
                    <div className='buyonline'>
                        <button className='wishactive'>Buy online</button>
                        <button className='wishnotactive'>Buy in Store</button>
                    </div>
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
                        <button onClick={() => (wishQtyAction(ele))}><AiOutlinePlus/></button>
                        <button>{ele.Qty}</button>
                        <button disabled={ele.Qty == 1} onClick={() => wishSubAction(ele)}></button>
                        <button onClick={() => wishDeleteAction(ele)}>Remove product</button>
                        <button>Save for later</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
                <div className="wish-summary">
                    <p>Wish list summary</p>
                    <div className='wishtotal'>
                        <span>Regular price:</span>
                        <h2>Rs.13,990.00</h2>
                    </div>
                    <h5>Want to buy these articles online?</h5>
                    <div className="wishdelivery">
                        <button><HiShoppingCart />View Add all products to cart<span><i className="fa fa-arrow"></i></span></button>
                    </div>
                </div>
            </div>
            <div className="cartempty">
                <div class="cartemptyinner">
                    <h2>Your bag is empty</h2>
                    <button type="button" class="" aria-label="Open context menu for shopping bag" data-testid="context_menu">...</button></div>
            </div>
            <div className="cartemptygo">
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
