import React from 'react';

export default function Counter({gap}) {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Counter with State</h1>
            <p>Counter: {count}</p>
            <Button onClick={() => setCount(count - gap)}>Decrement {gap}</Button>
            <Button onClick={() => setCount(count + gap)}>Increment {gap}</Button>
        </div>
    )
}   


