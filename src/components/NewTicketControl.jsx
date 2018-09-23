import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';
import PropTypes from 'prop-types';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
          currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

// Everything in the render function is related to what's being displayed. currentlyVisibleContent gets filled with the new ticket form or the confirmation questions.

// Event handler will work with the new conditional rendering when unidirectional data flow is introduced.

export default NewTicketControl;

// super keyword called to access a parent class's constructor. In this case, that's the React.Component constructor.

// this.state = {}; is standard convention for delcaring state in ES6. More than one state value could be added by using key-value pairs

// onClick means that the attached method will be triggered when the cluser clicks the text

// this.handleClick states that a method from this component called handleClick() will be triggered when the lements is clicked
