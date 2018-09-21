import React from 'react';

class ExampleClassComponent extends React.Component {
  render() {
    return (
        <div>
          <h1>I am a stateful, class-based component!</h1>
          <p>These are props sent by my parent component:</p>
          <ul>
            <li>{this.props.examplePropOne}</li>
            <li>{this.props.examplePropTwo}</li>
         </ul>
       </div>
    );
  }
}

export default ExampleClassComponent;

// This is a class based component
// Only use state if absolutely neccesary

// Props can only be accessed by calling this.props.propName instead of props.propName.

// Class-based components must include a render() method. The JSX returned by this method is what will be displayed in the browser.

// The class must always extend from the built-in React.Component class to inherit component functionality from the React library.
