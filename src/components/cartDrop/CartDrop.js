import React from 'react'
import Custombutton from '../custombutton/Custombutton'
import './CartDrop.scss'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart-selectors'

function CartDrop({cartItems}) {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)}
            </div>
            <Custombutton> GO TO CHECKOUT </Custombutton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDrop)
