import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const { product, setProduct } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setProduct([...product, res.data])
        })
        .catch(err=>console.log(err));
        setTitle("");
        setPrice(0);
        setDescription("");
    }
    return (
        <form onSubmit={onSubmitHandler} style={{textAlign : 'center'}}>
            <p>
                <label>Title</label><br />
                <input type="text" onChange = { (e) => setTitle(e.target.value)} value={title} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" min="0" step=".001" onChange = { (e) => setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br />
                <textarea onChange = { (e) => setDescription(e.target.value)} value={description}></textarea>
            </p>
            <input type="submit" value="Create" />
        </form>
    )
}

export default ProductForm;


                