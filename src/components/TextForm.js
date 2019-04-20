import React, { useState } from 'react';
import { TextArea } from 'react95';

const TextForm = () => {

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextArea 
                value={message}
                placeholder="Type in here.."
                onChange={handleChange}
            />
            <button type="submit">submit</button>
        </form>
    );
}

export default TextForm;