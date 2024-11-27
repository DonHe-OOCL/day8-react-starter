import {useState} from 'react'
const CounterGroupGenerator = (props) => {

    const [size, setSize] = useState(0)

    const handleChange = (event) => {
        if (event.target.value < 0) {
            setSize(0)
        } else if (event.target.value > 20) {
            setSize(20)
        } else {
            setSize(event.target.value)
        }
    }

    const handleReset = () => {
        if (size !== props.size) {
            props.setSummary(0)
        }
        props.setSize(size)
    }

    return (
        <div>
            <span>size:</span>
            <input type="number" value={size} onChange={handleChange}/>
            <button onClick={handleReset}>reset</button>
        </div>
    );

}

export default CounterGroupGenerator