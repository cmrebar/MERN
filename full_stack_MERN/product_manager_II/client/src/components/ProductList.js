import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    const { product, setProduct } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res);
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {
            product.map((product, i) => {
                return (
                    <div key={i}>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <Link to={"/products/" + product._id}>View</Link>
                    </div>
                )})
                }
        </div>
    );
}

export default ProductList;