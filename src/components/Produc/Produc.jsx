import React from 'react';
import './Produc.css'
const Produc = (props) => {
    const { img, name, seller, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
                
            </div>
            <button className='btn-cart'>Add to Cart</button>
            
        </div>
        
    );
};

export default Produc;