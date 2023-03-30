import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const PersonList = (props) => {
    const { person, setPerson } = props;
    useEffect(() => {
        axios.get('http://localhost:8000/api/person')
            .then(res => {
                console.log(res);
                setPerson(res.data);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            {
            person.map((person, idx) => {
                return ( 
                <div key={idx}>
                <p>{person.firstName}, {person.lastName}</p>
                <Link to={"/person/" + person._id}>{person.firstName}'s Page</Link>
                </div>
            )})
            }
        </div>
    );
}

export default PersonList;