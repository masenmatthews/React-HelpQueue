import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
      </div>
    );
  }
}

export default NewTicketControl;

// super keyword called to access a parent class's constructor. In this case, that's the React.Component constructor.

// this.state = {}; is standard convention for delcaring state in ES6. More than one state value could be added by using key-value pairs
