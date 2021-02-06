import React from 'react'
import Custombutton from '../custombutton/Custombutton'
import './CartDrop.scss'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux'

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

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDrop)
