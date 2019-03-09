import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartMenu from './StartMenu';
import StudentHome from './StudentHome';
import CreateMenu from './CreateMenu';
import SettingsMenu from './Settings';
import LecturerHome from './LecturerHome';
import QuestionsMenu from './QuestionsMenu';

function Start() {
  return <StartMenu />;
}

function Student() {
  return <StudentHome />;
}

function Lecturer() {
  return <LecturerHome />;
}

function Create() {
  return <CreateMenu />;
}

function Settings() {
  return <SettingsMenu />;
}

function Questions() {
  return <QuestionsMenu />;
}

function AppRouter() {
  return (
    <Router basename="/csc318-classmood">
      <div>
        <Route path="/" exact component={Start} />
        <Route path="/student/" component={Student} />
        <Route path="/lecturer/" component={Lecturer} />
        <Route path="/create/" component={Create} />
        <Route path="/settings/" component={Settings} />
        <Route path="/questions/" component={Questions} />
      </div>
    </Router>
  );
}

export default AppRouter;
