import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Signup from '../views/Signup';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Redirect to="/sign-up"/>
        </Route>
        <Route exact component={Signup} path="/sign-up" />
      </Router>
    </div>  
  );
}

export default App;
