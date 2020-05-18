import React, { useState, useEffect } from 'react';
import axios from 'axios';
const hostname = "http://localhost:8000"

const Get = ({ name }) => {
    const [text, setText] = useState("");

    //runs at the end of the function iff name changes after the first time
    useEffect(() => {
        const fetchText = async () => {
            const res = await axios.get(`${hostname}/hello/${name}`)
            console.log(res)
            setText(res.data["message"]) //triggers a re-render, with one value for text, renders twice
        };
        fetchText();
    }, [name]);

    if (text.length === 0) {
        return <div />
    }
    return (
        <div>
            {text}
        </div>
    )
}

export default Get;