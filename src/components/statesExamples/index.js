import React, { useState } from 'react';

const LanguageField = (event) => {

    const [count, setCount] = useState(0);
    const [name, setSearchName] = useState("");

    const handleChange = event => { setSearchName(event.target.value);};
    console.log(handleChange)

    return (
        <>
            <p>hello world, lets check out a setstate for the {count} time</p>
            <button onClick={() => setCount(count + 1)}>check state for +1</button>
            <button onClick={() => setCount(count - 1)}>check state for -1</button>
            <input type="text" onChange={handleChange} />
            <p>hello my name is {name}</p>
        </>
    );
}

export default LanguageField;