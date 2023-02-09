import React from 'react'
import styles from "../Pages/cart.css"

const Cart = () => {
  return (
<div>
    <div className="cart-container">
    <div className='cart-container-inner'>
        <div className='cartheading'>
            <h1>Shopping bag</h1>
            <h1>...</h1>
        </div>
      
      <div className="cartdiv">
        <div className="cartimg">
            <img src="https://www.ikea.com/in/en/images/products/markus-office-chair-vissle-dark-grey__0724714_pe734597_s3.jpg" alt="" />
            <span>78589496</span>
        </div>
        <div className="cartdetails">
            <div className='cartdetailsinner'> 
            <h4>markus</h4>
            <p>Office Chair, Vissle dark grey</p>
            </div>
            <h5>Rs.67557587</h5>
            <div className='cartproduct'>
            <select name="" id="">
                <option value="">3</option>
                <option value="">3</option>
                <option value="">3</option>
            </select>
            <h5>Remove product</h5>
            <h5>Save for later</h5>
            </div>
        </div>
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
      <button>View delivery and pickup options <span><i className="fa fa-arrow"></i></span></button>
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

export default Cart
