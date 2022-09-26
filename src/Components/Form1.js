import React, { useState } from 'react'
import Signup from './Signup/Signup'
import SignupFormSuccess from './SignupFormSuccess'

function Form1() {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
       setFormIsSubmitted(true);
    };
  return (
    <div>
        { !formIsSubmitted ? <Signup submitForm={submitForm}/> : <SignupFormSuccess/> }
    </div>
  );
};

export default Form1