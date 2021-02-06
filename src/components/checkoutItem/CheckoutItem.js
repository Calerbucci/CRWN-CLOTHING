import React from 'react'
import './CheckoutItem.scss'
import {connect } from 'react-redux'
import { clearItemFromCart , removeItem, addItem} from '../../redux/cart/cart-action'


function CheckoutItem({cartItem, clearItem , removeItemFrom, addItem}) {

    const  {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item'>
            
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
                <span className='name'> {name}</span>
                    <span className='quantity'> 
                        <div className='arrow' onClick={() => removeItemFrom(cartItem)}> &#10094;</div>
                            <span className='value'>  { quantity }  </span>     
                        <div className='arrow' onClick={()=> addItem(cartItem)}> &#10095;</div>
                    </span>
                <span className='price'> {price} </span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}> &#10005; </div>
        </div>
    )
}

const maspDispatchToprops = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItemFrom: item => dispatch(removeItem(item))
})
export default connect(null, maspDispatchToprops)(CheckoutItem)
