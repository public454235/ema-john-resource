import React from 'react';
import './Card.css'

const Card = ({card}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const prodect of card){
        totalPrice = totalPrice + prodect.price;
        totalShipping = totalShipping + prodect.shipping
        
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax

    console.log(card)
    return (
        <div className='card'>
            <h2>Order Summary</h2>
            <p>Seleted Iteam: {card.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Card;