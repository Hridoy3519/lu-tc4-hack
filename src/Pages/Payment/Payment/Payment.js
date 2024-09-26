import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51K0RVeDsbwPU7sfEodXiKUw8KDFDi3zlaHv8rol2vTI9kM8HR6h2d5k2qrHHKrkeYKR1mIJIe4a9r8S2Yu2Dx09C00eyi6bcta');

const Payment = () => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;