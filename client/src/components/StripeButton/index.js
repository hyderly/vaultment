import React from 'react';
import ReactStripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const publishabelKey =
  'pk_test_51JncJmGEXLeoe1SctbBOwuRi7JCefilfGH9aOCdFWpQjABW64VZ2LTZQLs0NPj1iEALYTjvnB4JMJ7KE06TbVDUQ004RRPQjEG';

const StripeBtn = ({ amount, confirmPayment, createSubscription }) => {
  // const handleToken = async (token, addresses) => {
  //   console.log({ token, addresses });
  //   console.log(token);

  //   confirmPayment();
  // };

  const handleToken = async (token, addresses) => {
    console.log({ token, addresses });
    console.log(token);
  };

  return (
    <ReactStripeCheckout
      stripeKey={publishabelKey}
      token={handleToken}
      billingAddress
      shippingAddress
      name="Vaultment"
      description="Plan the Vaultment Storage Amount"
      amount={amount}
      panelLabel="Pay Now"
    >
      <button className="stripe-btn btn" onClick={createSubscription}>
        Credit or Debit Card
      </button>
    </ReactStripeCheckout>
  );
};

export default StripeBtn;
