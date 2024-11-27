import React, {useState} from 'react';
import CounterGroup from './CounterGroup';
import CounterGroupGenerator from "./CounterGroupGenerator";

const MultipleCounter = () => {
    const [counterCount,setCounterCount] = useState([]);
    const [summary,setSummary] = useState(0);
    const [size, setSize] = useState(0);

    const handleSize = (event) => {
        if (event.target.value >= 0 && event.target.value <= 20) {
            setSize(event.target.value);
        } else if (event.target.value < 0) {
            setSize(0);
        } else {
            setSize(20);
        }
    };
    const handleReset = () => {
        if(size != counterCount.length){
            setCounterCount(Array(Number(size)).fill(0));
            setSummary(0);
        }
    };
    const changeSummary = (value, index)=>{
        const diff = value - counterCount[index]
        setSummary(summary + diff)
        changeCounterCount(value,index)
    }

    const changeCounterCount = (value,index) => {
        const newCount = [...counterCount];
        newCount[index] = value
        setCounterCount(newCount)
    }

    return (
        <div>
            <CounterGroupGenerator size={size} handleSize={handleSize} handleReset={handleReset}/>
            <div>
                {counterCount.length > 0
                    && <CounterGroup counterCount={counterCount} summary={summary} changeSummary={changeSummary} changeCounterCount={changeCounterCount} />}
            </div>
        </div>
    );
};

export default MultipleCounter;