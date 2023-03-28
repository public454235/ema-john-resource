import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
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
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Produc>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}></Card>
            </div>

        </div>
    );
};

export default Shop;