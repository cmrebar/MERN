import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = (props) => {
    const { id } = useParams();
    const [ product, setProduct ] = useState({});
    const navigate = useNavigate();
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
        }

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h1>Product Detail</h1>
            <h3>Product: {product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
            
        </div>
    )
}

export default Detail;

