import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StartMenu from './Start.js';

function Start() {
  return <StartMenu />;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Start} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;