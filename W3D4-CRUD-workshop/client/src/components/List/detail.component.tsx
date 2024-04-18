import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js';
import Product from '../../types/product.type'

export default function Detail() {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const token = PubSub.subscribe('products', (msg, data) => {
            setProduct(data);
        });
        return () => {
            PubSub.unsubscribe(token);
        }
    }, []);

    return (
        <div className="col">
            {product ? (
                <>
                    <p>Product Id: {product.id}</p>
                    <p>Product Title: {product.title}</p>
                    <p>Product Price: {product.price}</p>
                    <p>Product Description: {product.description}</p>
                    <p><button className='btn btn-danger'>Delete</button></p>
                </>
            ) : <h2>please click a product on left side to see detail</h2>}
        </div>
    )
}
