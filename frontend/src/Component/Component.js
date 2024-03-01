import Component from './src/Component';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Component() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            {data ? (
                <p>Data from Flask API: {data.message}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Component;
