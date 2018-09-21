import React from 'react';
import Ticket from './Ticket';
import helpImage from '../assets/images/help.jpg';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList(props) {
  var TicketListComponentStyles = {
  backgroundColor: '#ecf0f1',
  fontFamily: 'sans-serif',
  paddingTop: '50px',
  };

  var HelpImageStyles = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  };

return (
  <div style={TicketListComponentStyles}>
    <hr/>
    {masterTicketList.map((ticket, index) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={index}/>
    )}
    <div style={HelpImageStyles}>
      <img src={helpImage}/>
    </div>
  </div>
  );
}

export default TicketList;
