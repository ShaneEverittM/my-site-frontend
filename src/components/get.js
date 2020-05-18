import React, { useState, useEffect } from 'react';
import axios from 'axios';
const hostname = "http://localhost:8000"

const Get = ({ name }) => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchText = async () => {
            const res = await axios.get(`${hostname}/hello/${name}`)
            console.log(res)
            setText(res.data["message"])
        };
        fetchText();
    }, []);
    return (
        <div>
            {text}
        </div>
    )
}

export default Get;