import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const product = useLoaderData().data;
    console.log(product)
    
    const { name, resellPrice } = product;
    
    return (
        <div>
            <h3 className="text-3xl">Payment for {name}</h3>
            <p className="text-xl">Please pay <strong>TK {resellPrice}</strong> for your order</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        product={product}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;