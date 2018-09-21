import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  return (
    <div>
      <Header/>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicketForm} />
      <Switch>
      </Switch>

    </div>
  );
}

export default App;

// router path previously defined as <TicketList/>
// route exact path defined as exact because it contains a portion of another route. this is really weird but apparently react router is being changed so that all paths are defined with the 'exact' tag.
