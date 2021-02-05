import React from 'react'
import Custombutton from '../custombutton/Custombutton'
import './CartDrop.scss'

function CartDrop() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <Custombutton> GO TO CHECKOUT </Custombutton>
        </div>
    )
}

export default CartDrop
