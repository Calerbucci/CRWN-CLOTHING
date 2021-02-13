import React from 'react'
import {SpinnerContainer, SpinnerOverlay} from './with.spinner.style'

const withSpinner = WrappedComponent =>  ({isLoading, ...otherProps}) => {

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):
    (
        <WrappedComponent {...otherProps} />
    )
}

export default withSpinner
