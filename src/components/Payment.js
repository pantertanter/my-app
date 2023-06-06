import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../Css/Payment.css'; // Import the CSS file for styling


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setIsProcessing(false);

    if (error) {
      setError(error.message);
    } else {
      // Send the payment method ID to your server for further processing
      // You can make an API request here to complete the payment on the server
      // e.g., axios.post('/api/payments', { paymentMethodId: paymentMethod.id })

      setIsCompleted(true);
    }
  };

  return (
    <div className="PaymentForm">
      {isCompleted ? (
        <p>Payment successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Card details
              <CardElement />
            </label>
          </div>
          <button type="submit" disabled={!stripe || isProcessing}>
            {isProcessing ? 'Processing...' : 'Pay'}
          </button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default PaymentForm;