import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
  }

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewTicketControl;

// super keyword called to access a parent class's constructor. In this case, that's the React.Component constructor.

// this.state = {}; is standard convention for delcaring state in ES6. More than one state value could be added by using key-value pairs

// onClick means that the attached method will be triggered when the cluser clicks the text

// this.handleClick states that a method from this component called handleClick() will be triggered when the lements is clicked
