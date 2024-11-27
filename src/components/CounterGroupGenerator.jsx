import {useState} from 'react'
const CounterGroupGenerator = (props) => {

    const [size, setSize] = useState(props.size)

    const handleChange = (event) => {
        let cnt = event.target.value
        if (cnt < 0) {
            cnt = 0
        } else if (cnt > 20) {
            cnt = 20
        }
        setSize(cnt)
    }

    const handleReset = () => {
        setSize(0)
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