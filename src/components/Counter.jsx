import { useState } from "react";
const Counter = (props) => {

    const [count, setCount] = useState(0);

    const addSummary = props.addSummary;

    const incrCnt = () => {
        const newCount = count + 1;
        setCount(newCount);
        addSummary(1);
    };

    const decrCnt = () => {
        const newCount = count - 1;
        setCount(newCount);
        addSummary(-1);
    };

    return (
        <div>
            <button onClick={incrCnt}>+</button>
            <span>{ count }</span>
            <button onClick={decrCnt}>-</button>
        </div>
    );
}

export default Counter