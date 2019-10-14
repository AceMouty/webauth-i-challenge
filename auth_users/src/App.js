import React from 'react';
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm}/>
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
