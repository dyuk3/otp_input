import { useRef } from 'react';
import './App.css';

function App() {
  const input1ref = useRef(null);
  const input2ref = useRef(null);
  const input3ref = useRef(null);
  const input4ref = useRef(null);

  const handleInput1Change = (e) => {
    if (e.target.value.length === 1) {
      input2ref.current.focus();
    }
  };

  const handleInput2Change = (e) => {
    if (e.target.value.length === 1) {
      input3ref.current.focus();
    }
  };

  const handleInput3Change = (e) => {
    if (e.target.value.length === 1) {
      input4ref.current.focus();
    }
  };

  const handleBackspace = (e, currentRef, prevRef) => {
    if (e.key === 'Backspace' && currentRef.current.value === '') {
      e.preventDefault();
      prevRef.current.focus();
    }
  };

  const controlInput = (ref) => {
    if (ref.current.value.length > ref.current.maxLength)
      ref.current.value = ref.current.value.slice(-1);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>Please enter your OTP:</h1>
        <div className='inputContainer'>
          <input
            className='numInput'
            ref={input1ref}
            onChange={handleInput1Change}
            onInput={() => controlInput(input1ref)}
            maxLength={1}
            type='number'
          />
          <input
            className='numInput'
            ref={input2ref}
            onChange={handleInput2Change}
            onInput={() => controlInput(input2ref)}
            onKeyDown={(e) => handleBackspace(e, input2ref, input1ref)}
            maxLength={1}
            type='number'
          />
          <input
            className='numInput'
            ref={input3ref}
            onChange={handleInput3Change}
            onInput={() => controlInput(input3ref)}
            onKeyDown={(e) => handleBackspace(e, input3ref, input2ref)}
            maxLength={1}
            type='number'
          />
          <input
            className='numInput'
            ref={input4ref}
            onInput={() => controlInput(input4ref)}
            onKeyDown={(e) => handleBackspace(e, input4ref, input3ref)}
            maxLength={1}
            type='number'
          />
        </div>
        <button className='submitBtn'>Submit OTP</button>
      </div>
    </div>
  );
}

export default App;
