import { useState } from 'react';
import { PropTypes } from 'prop-types'
import './MyCounter.css'

export const MyCounter = ({value}) => {
    const [count, setCount] = useState(value);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount((c)=> c - 1);
    }
    const reset = () => {
        setCount(value);
    }
    return (
        <>
            <h1> My Counter Component </h1>
            <p> value: {count} </p>
            <div className="btn-container">
                <button onClick={increment}> +1 </button>
                <button onClick={decrement}> -1 </button>
                <button onClick={reset}> reset </button>
            </div>
        </>
    )
}

MyCounter.defaultProps = {  value: 0 };
MyCounter.propTypes = {  value: PropTypes.number };