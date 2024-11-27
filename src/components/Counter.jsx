import { useState } from "react";
const Counter = () => {

    const [count, setCount] = useState(0);
    const incrCnt = () => {
        setCount(count + 1);
    };

    const decrCnt = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={incrCnt}>+</button>
            <span>{count}</span>
            <button onClick={decrCnt}>-</button>
        </div>
    );
}

export default Counter