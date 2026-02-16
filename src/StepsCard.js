import Button from "./Button";
import React from "react";
import  {useState}  from 'react';

export default function StepsCard() {
    const [step, setStep] = React.useState(1);
    const [showCard, setShowCard] = useState(true);
    return (
        <div>
            <button style={{ width: "30px", height: "30px" }} onClick={() => setShowCard(!showCard)}>&times;</button>
            <div>
                {showCard && <div style={stepsCardStyle}>

                    <Steps step={1} style={step === 1 ? stepStyle : { ...stepStyle, backgroundColor: "lightgray" }}></Steps>
                    <Steps step={2} style={step === 2 ? stepStyle : { ...stepStyle, backgroundColor: "lightgray" }}></Steps>
                    <Steps step={3} style={step === 3 ? stepStyle : { ...stepStyle, backgroundColor: "lightgray" }}></Steps>
                    <hr />
                    <div> <Msg step={step}></Msg>  </div>
                    <hr />
                    <div style={buttonWrapStyle}><Button step={1} onClick={() => setStep(step + 1)}>{step > 3 ? "Completed!" : `Step ${step}`}</Button></div>
                </div>}</div>
        </div>
    );
}

export function Steps({ step, style }) {
    return (
        <>
            <span style={style}>{step}</span>

        </>
    );
}

export function Msg({ step }) {
    return (
        <>
            <p style={{ marginRight: "10px" }}>
                {step === 1 && "Welcome to Step 1!"}
                {step === 2 && "Welcome to Step 2!"}
                {step === 3 && "Welcome to Step 3!"}
                {step > 3 && "You have completed all steps!"}
            </p>
        </>
    );
}
const stepsCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "5px",
    width: "600px",
    display: "flex",
    justifyContent: "space-around"
}
const stepStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "blue",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 10px 0 0"
}
const buttonWrapStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}