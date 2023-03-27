import React, { useEffect, useState } from 'react';
import Produc from '../Produc/Produc';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Produc
                        key={product}
                        product={product}
                    ></Produc>)
                }
            </div>
            <div className='card-container'>
                <h2>Order Summary</h2>
            </div>

        </div>
    );
};

export default Shop;