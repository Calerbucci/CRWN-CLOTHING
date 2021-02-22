import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

function Stripebutton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IAcl5B2F0WPSCgVDHPUP0Jki5SmIZVdoFWW7n6cdHiXXZWLksSiYHsBWB0B9YuG1IEGBaSct66tVeSPzgnnQRlc00RQveVKZu';
    
   const onToken = (token) => {
        axios ({
            url:'/payment',
            method:'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Succesful');
            console.log(response);
        }).catch(error => {
            console.log('Payment error: ', error);
            alert('There was an issue with your payment, Please sure you use the provided credit card')
        })
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
