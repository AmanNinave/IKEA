import React from 'react'
import styles from "../Pages/cart.css"
// import myStore from '../Redux/Store'
import { BsFillCartPlusFill } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'
import { myStore } from '../Redux/Store'
import cartAction from '../Redux/Action/cartAction'
import cartQtyAction from '../Redux/Action/cartQuantityAction'
// import { ImPlus } from "react-icons/im/ImPlus"


const Cart = () => {

  //  const{dispatch, getState}=myStore;
  const cartdata = useSelector((store) => {
    return store.cartReducer.cartData
  })
  const dispatch = useDispatch()

  const handleqty = (index, type) => {



    if (type == "add") {

      let mapdta = cartdata.map((elem, idx) => {
        if (index == idx) {
          return { ...elem, Qty: (elem.Qty + 1) };
        } else {
          return elem;
        }
      })

      cartQtyAction( mapdta, dispatch)
    }
    else if (type == "sub") {

      let mapdta = cartdata.map((elem, idx) => {
        if (index == idx) {
          return { ...elem, Qty: (elem.Qty - 1) };
        } else {
          return elem;
        }
      })

      cartQtyAction( mapdta, dispatch)

    }
  }
  console.log(cartdata)
  return (
    <div>
      <div className="cart-container">
        <div className='cart-container-inner'>
          <div className='cartheading'>
            <h1>Shopping bag</h1>
            <h2>...</h2>
          </div>

          <div className="cartdiv">
            {
              cartdata.length > 0 &&
              cartdata.map((ele, index) => {
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
                        <button disabled = {ele.Qty == 1} onClick={() => handleqty(index, "sub")}>-</button>
                        <button>{ele.Qty}</button>
                        <button onClick={() => handleqty(index, "add")}>  +  </button>
                        <button>Remove product</button>
                        <button>Save for later</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="order-summary">
          <div>Order summary</div>
          <div className='cartdelivery'>
            <span>Total delivery cost</span>
            <span>This subtotal doesn’t include the delivery cost</span>
          </div>
          <div className='carthr'></div>
          <div className='cartotal'>
            <span>Subtotal</span>
            <h2>Rs.13,990.00</h2>
          </div>
          <div className="deliveryEstimate">
            Delivery estimates will be available on the next page.
          </div>
          <div className="viewdelivery">
            <button> delivery and pickup options <span></span></button>
          </div>
          <div className="cartreturnpolicy">
            <span><i className=""></i></span>
            <a href="">Our Return Policy</a>
          </div>
          <div className="cartreturnpolicy">
            <span><i className=""></i></span>
            <a href="">Secure shopping with SSL data encryption</a>
          </div>
        </div>
      </div>
      <div className="bagempty">
        {

        }
        <div className="cartempty">
          <div class="cartemptyinner">
            <h2>Your bag is empty</h2>
            <button type="button" class="" aria-label="Open context menu for shopping bag" data-testid="context_menu">...</button>
          </div>
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
    </div>
  )
}

export default Cart
