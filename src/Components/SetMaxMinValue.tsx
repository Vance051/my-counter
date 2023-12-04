import React, {ChangeEvent, FC, useState} from 'react';
import Button from "./Button";


type PropsType = {
    value: number | string
    maxVal: number
    setMaxVal: (maxVal: number) => void
    minVal: number
    setMinVal: (minVal: number) => void
    setMaxMinValue: () => void

}
const SetMaxMinValue: FC<PropsType> = ({value, maxVal, setMaxVal, setMinVal, minVal, setMaxMinValue}) => {


    const setNewMaxVal = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxVal(e.currentTarget.valueAsNumber)
    }//set maximum
    const setNewMinVal = (e: ChangeEvent<HTMLInputElement>) => {
        setMinVal(e.currentTarget.valueAsNumber)
    }// set minimum
    return (

        <div className={'wrapperCounter'}>
            <div className={'displayValue'}>
                <div><span>max value</span><input value={maxVal}
                                                  onChange={(e) => {
                                                      setNewMaxVal(e)
                                                  }}
                                                  type="number"/></div>
                <div><span>min value</span><input value={minVal}
                                                  onChange={(e) => {
                                                      setNewMinVal(e)
                                                  }}
                                                  type="number"/></div>
            </div>
            <div className={'blockButton'}>
                <Button counterDisabled={false} onClick={setMaxMinValue}>Set</Button>
            </div>
        </div>
    );
};

export default SetMaxMinValue;