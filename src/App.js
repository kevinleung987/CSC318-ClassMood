import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartMenu from './StartMenu';
import StudentHome from './StudentHome';

function Start() {
  return <StartMenu />;
}

function Student() {
  return <StudentHome />;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Start} />
        <Route path="/student/" component={Student} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
