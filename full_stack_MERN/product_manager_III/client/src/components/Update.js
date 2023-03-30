import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [ title, setTitle ] = useState();
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res);
            navigate("/home");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" step=".001" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
    }

    export default Update;