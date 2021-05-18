import React from 'react';
import swal from 'sweetalert';
import StripeCheckout from 'react-stripe-checkout'; // checkout component
import logo from '../../assets/img/logo.png';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // stripe needs usd in cents
    const publishableKey = 'pk_test_51IlBXWCqR1lQkbhnoQ7hsZPvwGPskZgMZSlsayRPnTozjLXhwbrhFLf74ILsXJrxoshlxoBJscvlPp20cIAU7s6300wfZlJCkZ'
    
    const onToken = token => {
        console.log(token);
        swal('Payment Successfull!', 'Thanks for being with SHOMIN', 'success')
    }

    return <StripeCheckout
            stripeKey={publishableKey}
            amount={priceForStripe}
            currency='USD'
            label='Make Payment'
            shippingAddress
            billingAddress
            description={`Your Total is $${price}`}
            image={logo}
            token={onToken}
            />
}


export default StripeCheckoutButton;