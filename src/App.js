import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartMenu from './StartMenu';
import StudentHome from './StudentHome';
import CreateMenu from './CreateMenu';
import SettingsMenu from './Settings';

function Start() {
  return <StartMenu />;
}

function Student() {
  return <StudentHome />;
}

function Create() {
  return <CreateMenu />;
}

function Settings() {
  return <SettingsMenu />;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Start} />
        <Route path="/student/" component={Student} />
        <Route path="/create/" component={Create} />
        <Route path="/settings/" component={Settings} />
      </div>
    </Router>
  );
}

export default AppRouter;
