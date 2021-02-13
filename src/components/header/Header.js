import React from 'react'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import {auth} from '../../firebase/firebase'
import {connect } from 'react-redux'
import CartIcon from '../cartIcon/CartIcon'
import CartDrop from '../cartDrop/CartDrop'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser } from '../../redux/user/user-selector'
import {selectHidden} from '../../redux/cart/cart-selectors'
import {HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './Header.style'

function Header({ currentUser, hidden }) {
    return (
  <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />             
            </LogoContainer>        
            <OptionsContainer>
                <OptionLink to='/shop' > SHOP </OptionLink>
                <OptionLink to='/contact' > CONTACT </OptionLink>
                {
                    currentUser ? 
                     (<OptionDiv  onClick={() => auth.signOut()}> SIGN OUT </OptionDiv>) :
                     (<OptionLink to='/signin' > SIGN IN </OptionLink>)
                }
                <CartIcon/>
            </OptionsContainer>
                {hidden? null: <CartDrop/>}
           
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header)
