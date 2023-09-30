import { useState } from 'react';

export const Counter = () =>{
    const [count, setCount] = useState(0)
    return (
        <>  
            <h1>Counter component </h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>    
    )
}