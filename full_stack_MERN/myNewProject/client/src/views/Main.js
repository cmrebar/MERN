import React, { useState } from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = (props) => {
    const [person, setPerson] = useState([]);

    return (
        <div>
            <PersonForm person={person} setPerson={setPerson}/>
            <hr/>
            <PersonList person={person} setPerson={setPerson} />
        </div>
    )
}

export default Main;
