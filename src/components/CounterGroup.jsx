import Counter from "./Counter";
const CounterGroup = (props) => {

    const { size } = props;

    const counters = [];

    for (let index = 0; index < size; index++) {
        counters.push(
            <Counter key={index + Math.random()}/>
        );
    }

    return (
        <div>
            {counters}
        </div>
    );
}

export default CounterGroup