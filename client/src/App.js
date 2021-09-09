import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Smart/Home';
import  ErrorPage  from './Components/Dumb/ErrorPage';

 

function App() {
  return (
  <div className='page-container'>
    <Router> 
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '*' component={ErrorPage}/>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
