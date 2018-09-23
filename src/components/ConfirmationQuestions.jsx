import React from 'react';

function ConfirmationQuestions(){
  return (
    <div>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button>Yes</button>
    </div>
  );
}

export default ConfirmationQuestions;

// Notice this is a stateless functional component. Even though state will eventually determine whether this component is rendered, it does not need to possess state of its own, so it is not declared as a class.

// Also, we're only using one of the three questions the live queue includes. This is intentional, so we may start small. We'll have an opportunity to add more questions later.
