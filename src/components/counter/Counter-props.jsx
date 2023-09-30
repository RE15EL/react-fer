import PropType from "prop-types"
import './counter-props.css'


export const CounterProps = ({value}) =>{
    const notifyEvent = (event) => console.log(event);

    return (
        <>  
            <h1>Counter component with onClick event</h1>
            <div className="card">
                <div className="content">
                    <button >
                        value: {value}
                    </button>
                    <button onClick={ notifyEvent }  >
                        +1
                    </button>
                </div>
            </div>
        </>    
    )
}

CounterProps.defaultProps = {
    value: 0
}

CounterProps.propTypes = {
    value: PropType.number.isRequired
}