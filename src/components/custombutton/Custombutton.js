import React from 'react'
import './Custombutton.scss'

function Custombutton({ children, ...otherProps}) {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default Custombutton
