import React, { useState } from 'react'

import NumberBoard from './NumberBoard';
import InputDisplay from './InputDisplay';
import Operations from './Operations';

const initialState = {
  operation: null,
  operationSign: "",
  activeNumber: "",
  storedNumber: "",
  result: "",
  isResolved: false,
  needsOperation: true
}

function App() {
  const [state, setState] = useState(initialState);

  function reset() {
    setState(initialState);
  }

  function recieveNumInput(number) {
    let newState = { ...state };
    newState.activeNumber = (newState.activeNumber + number);

    if (newState.isResolved) {
      newState.result = "";
      newState.isResolved = false;
    }

    setState(newState);
  }

  function recieveOperationInput(operation) {
    // Only allows operation once till reset
    if (!state.needsOperation || !state.activeNumber) { return; }
    // Useful for when the user whats to apply an operation
    // to the previous result of an operation. Otherwise continue
    // as normal
    let prevNumber = (state.isResolved) ? state.result : state.activeNumber;

    setState({
      operation: operation.opt,
      operationSign: operation.optSign,
      activeNumber: "",
      storedNumber: prevNumber,
      result: "",
      isResolved: false,
      needsOperation: false
    });
  }

  function handleEquals() {
    if (state.needsOperation || (!state.activeNumber && !state.storedNumber)) { return; }

    let firstNumber = parseInt(state.storedNumber);
    let secondNumber= parseInt(state.activeNumber);
    let result = state.operation(firstNumber, secondNumber);

    setState({
      operation: null,
      operationSign: "",
      activeNumber: "",
      storedNumber: "",
      result: result.toString(),
      isResolved: true,
      needsOperation: true
    });
  }

  return (
    <div className="App">
      <InputDisplay calcData={state} />
      <NumberBoard sendInput={recieveNumInput} />
      <Operations sendOperation={recieveOperationInput} />
      <div className="main-operations">
        <button className="reset" onClick={reset}>R/E</button>
        <button className="equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  )
}

export default App
