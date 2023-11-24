import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersView from './UsersView';
import UserInfoView from './UserInfoView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UsersView} />
        <Route path="/user/:userId" component={UserInfoView} />
      </Switch>
    </Router>
  );
}

export default App;
