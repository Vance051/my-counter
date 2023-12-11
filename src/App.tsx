import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import SetMaxMinValue from "./Components/SetMaxMinValue";

function App() {
    const [minVal, setMinVal] = useState(0)

    const [value, setValue] = useState<number | null>(null)
    const [maxVal, setMaxVal] = useState(0)
    const [disable, setDisable] = useState(false)
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxVal))
    //     localStorage.setItem('minValue', JSON.stringify(minVal))
    // }, [maxVal, minVal]);
    useEffect(() => {
        setDisable(false)
    }, [minVal, maxVal]);


    useEffect(() => {
        let valueFromLocalStorageMAX = localStorage.getItem('maxValue')
        let valueFromLocalStorageMin = localStorage.getItem('minValue')
        if (valueFromLocalStorageMAX) {
            let newValue = JSON.parse(valueFromLocalStorageMAX)
            setMaxVal(newValue)
        }
        if (valueFromLocalStorageMin) {
            let newValue = JSON.parse(valueFromLocalStorageMin)
            setMinVal(newValue)
            setValue(newValue)
        }
    }, []);

    const incValue = () => {
        if (value === null) return;
        setValue(value + 1)

    }
    const resetValue = () => {
        localStorage.clear()
        setValue(0)
        setDisable(false)
    }

    const setMaxMinValue = () => {
        setMaxVal(maxVal)
        setMinVal(minVal)
        setValue(minVal)
        localStorage.setItem('maxValue', JSON.stringify(maxVal))
        localStorage.setItem('minValue', JSON.stringify(minVal))
        setDisable(true)
    }


    return (
        <div className="App">
            <SetMaxMinValue
                maxVal={maxVal}
                minVal={minVal}
                setMaxVal={setMaxVal}
                setMinVal={setMinVal}
                setMaxMinValue={setMaxMinValue}
                disable={disable}
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
