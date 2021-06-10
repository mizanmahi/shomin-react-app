import React from "react";
import StripeCheckout from "react-stripe-checkout"; // checkout component
import logo from "../../assets/img/logo.png";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100; // stripe needs usd in cents
   const publishableKey =
      "pk_test_51IlBXWCqR1lQkbhnoQ7hsZPvwGPskZgMZSlsayRPnTozjLXhwbrhFLf74ILsXJrxoshlxoBJscvlPp20cIAU7s6300wfZlJCkZ";

   const onToken = (token) => {
      axios.post("payment", {amount: priceForStripe, token})
         .then((res) => alert("Payment sucessful"))
         .catch((err) => {
            console.log({ error: err });
            alert("Something is wrong with your payment!");
         });
   };

   return (
      <StripeCheckout
         stripeKey={publishableKey}
         amount={priceForStripe}
         label="Make Payment"
         shippingAddress
         billingAddress
         description={`Your Total is $${price}`}
         image={logo}
         token={onToken}
      />
   );
};

export default StripeCheckoutButton;
