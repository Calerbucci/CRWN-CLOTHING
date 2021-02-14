import React from 'react'
import './Custombutton.scss'

function Custombutton({ children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button className= {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default Custombutton
