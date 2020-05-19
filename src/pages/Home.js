import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css'
const hostname = 'http://localhost:8000'


const Home = ({ name }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchText = async () => {
            const res = await axios.get(`${hostname}/${name}`)
            console.log(res)
            setText(res.data['message']) //triggers a re-render, with one value for text, renders twice
        };
        fetchText();
    }, [name]);
    return (
        <div className='body'>{text}</div>
    )
}

export default Home;