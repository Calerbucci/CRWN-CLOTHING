import React from 'react'
import {ReactComponent as Shoppingicon} from '../../assests/shopping-bag.svg'
import './CartIcon.scss'
import {connect} from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart-action'

function cartIcon({toggleCartHidden}) {
    return (
            <div className='cart-icon' onClick={toggleCartHidden}>
                   <Shoppingicon className='shoopin-icon'/>
            <span className='item-count'> 0 </span>
            
        </div>
    )
}


const maspDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, maspDispatchToprops)(cartIcon)
