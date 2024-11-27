import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const CounterGroup = (props) => {
    const counters = [];
    const size =props.size

    const [countersState, setCountersState] = useState(Array(size).fill(0));


    useEffect(() => {
        setCountersState(Array(size).fill(0));
    }, [size]);

    const handleChange = (index, newCount) => {
        const updatedCounters = [...countersState];
        updatedCounters[index] = newCount;
        setCountersState(updatedCounters);
    };

    const total = countersState.reduce((sum, count) => sum + count, 0);

    for (let i = 0; i < size; i++) {
        counters.push(
            <Counter key={i} onChange={(newCount) => handleChange(i, newCount)} />
        );
    }

    return (
        <div className="counter-group">
            <div className="total">
                <h4>Total Sum: {total}</h4>
            </div>
            {counters}
        </div>
    );
};

export default CounterGroup;