import { useState } from 'react';
import './App.css';

const App = () => {
    const [clock, setClock] = useState('');

    function updateClock() {
        const date = new Date();
        setClock(date.toLocaleTimeString());
    }

    setInterval(updateClock, 1000);

    return (
        <div>
            <h1 className="heading">
                <span className="text">{clock}</span>
            </h1>
            <button type="button" onClick={updateClock}>
                Click Here
            </button>
        </div>
    );
};

export default App;
