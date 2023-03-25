import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Survey = (props) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    const sendSurvey = (e) => {
        e.preventDefault();
        navigate('/results');
    }

  return (
    <form onSubmit={ sendSurvey }>
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="comment">Your Comment:</label>
        <textarea type="text" name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
        <textarea />
        <input type="submit" value="Submit Survey" />
    </form>
  );
}

export default Survey