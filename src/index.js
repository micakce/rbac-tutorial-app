import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardPage from './pages/dashboard';
import HomePage from './pages/dashboard';

function App () {
  return (
    <div className="App container">
      <div className="jumbotron">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/dashboard" component={DashboardPage}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement );

