import React, {FC} from 'react';

type PropsType = {
    counter: number
}

const Counter: FC<PropsType> = ({counter}) => {
    return (

        <div className={counter >= 5 ? `display maxCount` : 'display'}>
            {counter}
        </div>
    );
};

export default Counter;