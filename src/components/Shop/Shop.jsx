import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(() => {
        const storeCard = getShoppingCart()
        const saveCard = []
        for (const id in storeCard) {
            const addedProduct = products.find(product => product.id == id)
            if (addedProduct) {
                const quantity = storeCard[id]
                addedProduct.quantity = quantity
                saveCard.push(addedProduct)
            }
        }
        setCard(saveCard)
    }, [products])
    const handleAddToCart = (product) => {
        const newCard = [...card, product]
        setCard(newCard)
        addToDb(product.id)

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