const CounterGroupGenerator = (props) => {

    return(
        <div>
            <font>Size:</font>
            <input
                type="number"
                value={props.size}
                onChange={props.handleSize}
                min="0"
            />
            <button onClick={props.handleReset}>Reset</button>
        </div>
    )
}

export default CounterGroupGenerator