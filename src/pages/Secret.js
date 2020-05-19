import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css'
const hostname = 'http://localhost:8000'


const Secret = ({ name }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchText = async () => {
            const res = await axios.get(`${hostname}/secret/${name}`)
            console.log(res)
            setText(res.data['message']) //triggers a re-render, with one value for text, renders twice
        };
        fetchText();
    }, [name]);
    return (
        <div className='home'>{text}</div>
    )
}

export default Secret;