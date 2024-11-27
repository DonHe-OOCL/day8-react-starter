import React, { useState } from 'react';

const Counter = ( props ) => {
    const [count, setCount] = useState(0);
    const onChange = props.onChange;

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
    };

    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        onChange(newCount);
    };

    return (
        <div className="counter">
            <button className="button" onClick={increment}>+</button>
            <span className="count">{count}</span>
            <button className="button" onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;