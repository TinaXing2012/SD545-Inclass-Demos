import React, { useEffect, useState, MouseEvent } from 'react'
import PubSub from 'pubsub-js';
import Product from '../../types/product.type';
import productService from '../../apis/services/product.service';

import './List.css';
import classNames from 'classnames';

export default function List() {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeId, setActiveId] = useState<number>(-1);

    useEffect(() => {
        async function getProducts() {
            const response = await productService.getAll();
            setProducts(response.data);
        }
        getProducts();
    }, []);

    const showDetail = (prod: Product, e: MouseEvent<HTMLLIElement>) => {
        PubSub.publish('products', prod);
        setActiveId(prod.id);
    }

    return (
        <div className="col">
            <ul className="list-group">
                {products.map(prod => <li
                    key={prod.id}
                    className={classNames('list-group-item', {highlighted: activeId === prod.id})}
                    onClick={(e) => showDetail(prod, e)}
                >{prod.title}</li>)}
            </ul>
        </div>
    )
}
