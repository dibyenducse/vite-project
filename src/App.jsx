import { useState } from 'react';
import './App.css';

function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js') ? 'You need js' : null;

        setTodo(inputValue);
        setWarning(updateWarning);
    };
    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea
                    name="todo"
                    value={todo}
                    onChange={handleInput}
                ></textarea>
            </p>
            <hr />
            <h2>{warning || 'Good Choice'}</h2>
        </div>
    );
}
export default App;
