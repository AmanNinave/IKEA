import React from 'react'
import styles from "../cart/cart.css"

const Wishlist = () => {
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
                <div className="wish-summary">
                    <p>Wish list summary</p>
                    <div className='wishotal'>
                        <span>Regular price:</span>
                        <h2>Rs.13,990.00</h2>
                    </div>
                    <h5>Want to buy these articles online?</h5>
                    <div className="wishdelivery">
                        <button>Add all products to cart<span><i className="fa fa-arrow"></i></span></button>
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
