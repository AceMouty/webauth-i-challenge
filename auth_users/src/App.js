import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Users from './components/Users'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <nav className="nav">
          <Link to="/">Register</Link>
          <Link to="/users">Users List</Link>
        </nav>
      </div>
      <Route exact path="/" component={LoginForm}/>
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
