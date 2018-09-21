import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Route exact path='/' component={TicketList} />
      <Route path='/newticket' component={NewTicketForm} />
      <Route component={Error404} />
      <Switch>
      </Switch>
    </div>
  );
}

export default App;

// router path previously defined as <TicketList/>
// route exact path defined as exact because it contains a portion of another route. this is really weird but apparently react router is being changed so that all paths are defined with the 'exact' tag.
