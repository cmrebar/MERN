import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Detail = (props) => {
    const { id } = useParams();
    const [person, setPerson] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                console.log(res);
                setPerson(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h1>{person.firstName}, {person.lastName}</h1>
        </div>
    )
}  

export default Detail;