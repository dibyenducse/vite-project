import { useEffect, useState } from 'react';
import './App.css';

// import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}
