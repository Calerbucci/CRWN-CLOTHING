import React from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { selectTotalCheckout } from '../../redux/cart/cart-selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import Stripebutton from '../../components/stripe-button/Stripebutton'


function checkout({cartItems, totalAmount}) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'> 
                <div className='header-block'>
                    <span> Product</span>
                </div>

                <div className='header-block'>
                    <span> Description </span>
                </div>

                <div className='header-block'>
                    <span> Quantity </span>
                </div>

                <div className='header-block'>
                    <span> Price</span>
                </div> 

                <div className='header-block'>
                     <span> Remove </span>
                </div>    
            </div>

            {
                cartItems.map(cartItem =><CheckoutItem key = {cartItem.id} cartItem={cartItem}/>)
            }
            <div className='total'>  TOTAL: ${totalAmount} </div>
            <div className='test-warning'>
                *Please use the following test credit card for payment*
                <br/>
                4242 4242 4242 4242 -Exp 04/24 -CVV: 123
            </div>
            <Stripebutton price = {totalAmount}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    totalAmount: selectTotalCheckout
})

export default connect(mapStateToProps)(checkout)
