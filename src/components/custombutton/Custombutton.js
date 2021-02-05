import React from 'react'
import './Custombutton.scss'

function Custombutton({ children, isGoogleSignIn, ...otherProps}) {
    return (
        <button className= {`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default Custombutton
