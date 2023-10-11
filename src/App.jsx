import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [clock, setClock] = useState('');

    function updateClock(lang) {
        const date = new Date();
        setClock(date.toLocaleTimeString(lang));
    }

    useEffect(() => {
        console.log('Starting Timer');
        const intervalId = setInterval(updateClock, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1 className="heading">
                <span className="text">{clock}</span>
            </h1>
            <button type="button" onClick={() => updateClock('bn-BD')}>
                Click Here
            </button>
        </div>
    );
};

export default App;
