import { useState } from 'react';

const App = () => {
    const [clock, setClock] = useState('');

    function handleClick() {
        const date = new Date();
        console.log('Button Clicked');
        setClock(date.toLocaleTimeString());
    }
    return (
        <div>
            <h1 className="heading">
                <span className="text">{clock}</span>
            </h1>
            <button type="button" onClick={handleClick}>
                Click Here
            </button>
        </div>
    );
};

export default App;
