import React from 'react';
import './Orders.css'

function Orders(props) {
    return (
        <div>

            <div id="MyOrdersBody">
                <div id="togivespace"></div>

                <div id="MyOrdersBox">
                    <h1>My Orders</h1>

                    <div id="top0">
                        <h2> &nbsp&nbsp Order ID : &nbsp <span id="orderidan1"> 4946663456 </span></h2> <button> Invoice
                        </button> <button class="trackordr"> Track Order <img
                            src="data:image/png;base64,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"
                            alt="" /></button>
                    </div>
                    <p id="datesec"> &nbsp&nbsp <span class="bold"> Order Date : &nbsp&nbsp </span> 05-12-2022 <span
                        class="bold"> &nbsp&nbsp | &nbsp&nbsp Estimated Delivery Date : </span>&nbsp&nbsp 08-12-2022</p>


                    <div id="ProductDisplayGrid">


                    </div>



                    <div id="Paymentdtls">


                    </div>

                </div>

            </div>

        </div>


    );
}

export default Orders;