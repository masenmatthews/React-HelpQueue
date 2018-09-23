import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTicketForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

// Everything in the render function is related to what's being displayed. currentlyVisibleContent gets filled with the new ticket form or the confirmation questions.

// Event handler will work with the new conditional rendering when unidirectional data flow is introduced. 

export default NewTicketControl;

// super keyword called to access a parent class's constructor. In this case, that's the React.Component constructor.

// this.state = {}; is standard convention for delcaring state in ES6. More than one state value could be added by using key-value pairs

// onClick means that the attached method will be triggered when the cluser clicks the text

// this.handleClick states that a method from this component called handleClick() will be triggered when the lements is clicked
