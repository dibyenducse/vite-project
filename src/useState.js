import ReactDom from 'react-dom';
import react from 'react';
//

let states = [];
let stateIndex = -1;

function useState(defaultValue) {
    const index = ++stateIndex;

    if (states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;

        renderWithDibbo;
    };
    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}

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

function renderWithDibbo() {
    stateIndex = -1;
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
renderWithDibbo();
