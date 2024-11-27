import Counter from "./Counter";
import {useState} from 'react'

const CounterGroup = (props) => {

    const { size } = props;

    const addSummary = (count) => {
        const newSummary = props.summary + count;
        props.setSummary(newSummary);
    }

    const counters = [];

    for (let index = 0; index < size; index++) {
        counters.push(
            <Counter key={index + Math.random()} addSummary={addSummary}/>
        );
    }

    return (
        <div>
            sum: {props.summary}
            {counters}
        </div>
    );
}

export default CounterGroup