import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import Button from "./Components/Button";

function App() {
    const [counter, setCounter] = useState(0)

    const counterIncrease = () => {
        setCounter(counter + 1)
    }
    const counterReset = () => {
        setCounter(0)
    }

    const setValueCounter =() => {
        let value = prompt('Value', '0')
        const newValue = value?  +value: 0
        setCounter(newValue)
    }
    return (
        <div className="App">
            <Counter counter={counter}/>
            <Button counterDisabled={counter >= 5} onClick={counterIncrease}>Increase</Button>
            <Button counterDisabled={counter === 0} onClick={counterReset}>Reset</Button>
            <Button onClick={setValueCounter}>SetValue</Button>
        </div>
    );
}

export default App;
