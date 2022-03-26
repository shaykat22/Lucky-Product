import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // Adding Selected Items in a array
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // For random item suggestion
    const chooseForMe = (cart) => {
        const choosen = cart.map(obj => ({ ...obj }));
        var randomItem = choosen[Math.floor(Math.random() * choosen.length)];
        alert(randomItem.name + " will be best for you.");
    }
    // Clear Previous Selected Items
    const chooseAgain = () => {
        setCart([]);
    }

    return (
        <div className='row position-relative'>
            <div className='col-8'>
                <div className='row row-cols-3'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Shop;