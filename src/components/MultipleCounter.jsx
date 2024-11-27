import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from 'react'

const MultipleCounter = () => {

    const [size, setSize] = useState(0);

    return (
        <div>
            <CounterGroupGenerator size={size} setSize={setSize}/>
        </div>
    );

}

export default MultipleCounter