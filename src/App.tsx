import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetMaxMinValue from "./Components/SetMaxMinValue";

function App() {
    const [minVal, setMinVal] = useState(0)

    const [value, setValue] = useState(0)
    const [maxVal, setMaxVal] = useState(0)


    const incValue = () => {
        setValue(value + 1)

    }
    const resetValue = () => {
        setValue(0)
    }

    const setMaxMinValue = () => {

        setMaxVal(maxVal)
        setMinVal(minVal)
        setValue(minVal)
    }


    return (
        <div className="App">
            <SetMaxMinValue
                value={value}
                maxVal={maxVal}
                minVal={minVal}
                setMaxVal={setMaxVal}
                setMinVal={setMinVal}
                setMaxMinValue={setMaxMinValue}
            />
            <Counter value={value}
                     maxVal={maxVal}
                     minVal={minVal}
                     incValue={incValue}
                     resetValue={resetValue}
            />
        </div>
    );
}

export default App;
