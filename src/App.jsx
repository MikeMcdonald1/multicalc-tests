import { useState } from 'react';
import './App.css';
import FormWrapper from './FormWrapper';
import CalculatorWrapper from './CalculatorWrapper';
import { OperandContext } from './context/OperandContext';

function App() {
  const [operand, setOperand] = useState(0);

  return (
    <main>
      <h1>Multi-Calc</h1>{' '}
      {/* added "-" in "./Multi-Calc/i" to match component{' '} */}
      <OperandContext.Provider value={{ operand, setOperand }}>
        <FormWrapper />
        <CalculatorWrapper />
      </OperandContext.Provider>
    </main>
  );
}

export default App;
