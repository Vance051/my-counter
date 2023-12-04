import React, {FC} from 'react';
import Button from "./Button";

type PropsType = {
    value: number | string
    incValue: () => void
    resetValue: () => void
    maxVal: number
    minVal: number
}
const Counter: FC<PropsType> = (props) => {
    const {value, incValue, resetValue, minVal, maxVal} = props
    const startMessage = 'Enter values and press SET'
    const error = 'Incorrect value!'
    return (
        <div>
            <div className={'wrapperCounter'}>
                <div className={'displayValue'}>{minVal===0 ? <span>startMessage</span> : minVal<0 ? <span>error</span> :value}</div>
                <div className={'blockButton'}>
                    <Button counterDisabled={value < 0 || value >= maxVal}
                            onClick={incValue}>increase</Button>
                    <Button counterDisabled={value <= minVal}
                            onClick={resetValue}>Reset</Button>
                </div>
            </div>
        </div>
    );
};

export default Counter;