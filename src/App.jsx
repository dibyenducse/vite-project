import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [clock, setClock] = useState(new Date());
    const [lang, setLang] = useState(false);

    function updateClock() {
        setLang(!lang);
    }

    const tick = () => {
        console.log('Timer Running');
        setClock(new Date());
    };

    useEffect(() => {
        console.log('Render Clock in useEffect');
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1 className="heading">
                <span className="text">
                    {lang
                        ? clock.toLocaleTimeString('en-US')
                        : clock.toLocaleTimeString('bn-BD')}
                </span>
            </h1>
            <button type="button" onClick={updateClock}>
                Click Here
            </button>
        </div>
    );
};

export default App;
