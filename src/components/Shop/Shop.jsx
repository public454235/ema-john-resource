import React, { useEffect, useState } from 'react';
import Produc from '../Produc/Produc';

import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product)=>{
        const newCard = [...card, product]
        setCard(newCard)

    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Produc
                        key={product}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Produc>)
                }
            </div>
            <div className='card-container'>
                <h2>Order Summary</h2>
                <p>Seleted Iteam: {card.length}</p>
            </div>

        </div>
    );
};

export default Shop;