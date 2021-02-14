import React from 'react'
import {ReactComponent as Shoppingicon} from '../../assests/shopping-bag.svg'
import './CartIcon.scss'
import {connect} from 'react-redux'
import {selectCartItemCount} from '../../redux/cart/cart-selectors'

import {toggleCartHidden} from '../../redux/cart/cart-action'

function cartIcon({toggleCartHidden, itemCount}) {
    return (
            <div className='cart-icon' onClick={toggleCartHidden}>
                   <Shoppingicon className='shopping-icon'/>
            <span className='item-count'> {itemCount} </span>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    itemCount : selectCartItemCount(state)
})

const maspDispatchToprops = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, maspDispatchToprops)(cartIcon)
