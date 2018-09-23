import React from 'react';

function NewTicketForm() {
    let _names = null;
    let _location = null;
    let _issue = null;

    function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  // The above function is just preventing the request from being fired automatically once you load the page. It's also console logging and setting values back to blank once the form is submitted. 

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

// a ref is an identifier used to reference DOM elements

export default NewTicketForm;

// onSubmit events only fire correctly if the form button includes a type='submit' property!
