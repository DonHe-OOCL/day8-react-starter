import Counter from './Counter';

const CounterGroup = (props) => {
    return (
        <div>
            <div>
                sum: {props.summary}
            </div>
            {props.counterCount.map((v,i)=><Counter key={i} count={v} onChange={(newCount) => props.changeSummary(newCount, i)}/>)}
        </div>
    );
};

export default CounterGroup;