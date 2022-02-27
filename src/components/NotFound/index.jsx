import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

function NotFound(props) {

    const navigate = useNavigate()

    const handleBackHome = () => {

        navigate('/')
    }
    return (
        <div className='not-found'>
            Not found, return home page pls
            <br />
            <Link to="/">Home Page</Link> |{" "}
            <button onClick={handleBackHome}>Click to back homepage</button>
        </div>
    );
}

export default NotFound;