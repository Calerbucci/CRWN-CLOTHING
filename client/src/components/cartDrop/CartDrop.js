import React from 'react'
import Custombutton from '../custombutton/Custombutton'
import './CartDrop.scss'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart-selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart-action'

function CartDrop({cartItems, history, dispatch}) {
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item = {cartItem} />)
                    : <span className='empty-message'> Your cart is empty </span>
                    }
            </div>
            <Custombutton onClick={() => 
            { 
                history.push('/checkout');
                dispatch(toggleCartHidden());
            
            }}> GO TO CHECKOUT </Custombutton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});



export default withRouter (connect(mapStateToProps)(CartDrop))
