import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Index from './components/Index'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path= '/' component = { Index }/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
