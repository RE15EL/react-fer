import PropType from "prop-types"

export const CounterProps = ({value}) =>{
    return (
        <>  
            <h1>Counter component with props</h1>
            <div className="card">
                <button >
                    value: {value}
                </button>
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