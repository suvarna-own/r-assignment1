import React, { Children } from 'react';

export default function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Counter with State</h1>
            <p>Counter: {count}</p>
            <Button onClick={() => setCount(count - 1)}>Decrement</Button>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
    )
}   
export function Button({ onClick, children }) {
    return (
        <>
            <button style={buttonStyles} onClick={onClick}>{children}</button></>
    );
}

const buttonStyles = {
    width: "100px",
    height: "30px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    borderRadius: "5px",
    color: "white",
    border: "none", 
    cursor: "pointer",
    marginRight: "10px"
};