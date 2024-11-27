const Counter = ( props ) => {
    return (
        <div>
            <button onClick={()=>props.onChange(props.count + 1)}>+</button>
            <span>{props.count}</span>
            <button onClick={()=>props.onChange(props.count - 1)}>-</button>
        </div>
    );
};

export default Counter;