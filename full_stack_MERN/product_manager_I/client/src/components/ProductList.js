import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom, product, setProduct } = props;
    const navigate = useNavigate();
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
                navigate("/home");
            })
            .catch(err => console.log(err))
        }
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
                        <h3>Product: {product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                        <Link to={"/products/" + product._id}>View</Link><br/>
                        <Link to={"/products/edit/" + product._id}>Update</Link><br/>
                        <button onClick={(e) => {deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </div>
                )})
                }
        </div>
    );
}

export default ProductList;