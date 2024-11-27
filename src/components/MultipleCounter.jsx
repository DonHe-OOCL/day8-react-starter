import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from 'react'
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {

    const [size, setSize] = useState(0);

    const [summary, setSummary] = useState(0);

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize} setSummary={setSummary}/>
            <CounterGroup size={size} summary={summary} setSummary={setSummary}/>
        </div>
    );

}

export default MultipleCounter