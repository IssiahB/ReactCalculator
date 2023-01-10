import React from "react";

function getOperationMap() {
    const addition = (num1, num2) => (num1 + num2).toString();
    const subtraction = (num1, num2) => (num1 - num2).toString();
    const multiplication = (num1, num2) => (num1 * num2).toString();
    const division = (num1, num2) => (num1 / num2).toString();

    const operationMap = {
        "+": addition,
        "-": subtraction,
        "*": multiplication,
        "/": division
    };

    return operationMap;
}

function Operations(props) {
    const {sendOperation} = props;
    const operationMap = getOperationMap();

    function handleClick(event) {
        let optType = event.target.textContent;
        let operation = operationMap[optType];

        sendOperation({
            opt: operation,
            optSign: optType
        });
    }
    
    return (
        <div className="operation-container">
            <button className="opAdd" onClick={handleClick}>+</button>
            <button className="opSub" onClick={handleClick}>-</button>
            <button className="opMul" onClick={handleClick}>*</button>
            <button className="opDiv" onClick={handleClick}>/</button>
        </div>
    );
}

export default Operations;