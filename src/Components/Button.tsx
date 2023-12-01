import React, {FC} from 'react';
import counter from "./Counter";

type PropsType =
    {
        onClick: () => void
        children: string
        counterDisabled?:boolean
    }

const Button: FC<PropsType> = ({onClick, children, counterDisabled}) => {
    return (
        <button className={counterDisabled? 'maxCount': ''} disabled={counterDisabled} onClick={onClick}>{children}</button>
    );
};

export default Button;