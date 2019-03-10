import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartMenu from './StartMenu';
import SettingsMenu from './Settings';
import LecturerHome from './LecturerHome';
import StudentHome from './StudentHome';

function AppRouter() {
  return (
    <Router basename="/csc318-classmood">
      <div>
        <Route path="/" exact component={() => <StartMenu />} />
        <Route path="/lecturer/" component={() => <LecturerHome />} />
        <Route path="/settings/" component={() => <SettingsMenu />} />
        <Route path="/questions/" component={() => <StudentHome />} />
      </div>
    </Router>
  );
}

export default AppRouter;
