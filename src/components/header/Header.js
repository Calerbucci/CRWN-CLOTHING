import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg'
import {auth} from '../../firebase/firebase'
import {connect } from 'react-redux'
import CartIcon from '../cartIcon/CartIcon'
import CartDrop from '../cartDrop/CartDrop'

function Header({ currentUser, hidden }) {
    return (
  <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo  className='logo'/>             
            </Link>        
            <div className='options'>
                <Link to='/shop' className='option'> SHOP </Link>
                <Link to='/contact' className='option'> CONTACT </Link>
                {
                    currentUser ? 
                     (<div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>) :
                     (<Link className='option' to='/signin' > SIGN IN </Link>)
                }
                <CartIcon/>
            </div>
                {hidden? null: <CartDrop/>}
           
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)
