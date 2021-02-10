import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

function Stripebutton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAcl5B2F0WPSCgVDHPUP0Jki5SmIZVdoFWW7n6cdHiXXZWLksSiYHsBWB0B9YuG1IEGBaSct66tVeSPzgnnQRlc00RQveVKZu';
    
   const onToken = (token) => {
        console.log(token);
        alert('Payment succesful')
    }

    return (
        <StripeCheckout
            label = 'Pay Now'
            name =' Andella Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey ={publishableKey}
        />
    )
}

export default Stripebutton
