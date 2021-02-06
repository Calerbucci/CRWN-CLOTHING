import React from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { selectTotalCheckout } from '../../redux/cart/cart-selectors'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem'


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
            <div className='total'>
                <span> TOTAL: ${totalAmount}  </span>
             </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({

    cartItems: selectCartItems,
    totalAmount: selectTotalCheckout
})

export default connect(mapStateToProps)(checkout)
