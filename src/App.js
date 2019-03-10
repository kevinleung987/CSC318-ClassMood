import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartMenu from './StartMenu';
import CreateMenu from './CreateMenu';
import SettingsMenu from './Settings';
import LecturerHome from './LecturerHome';
import QuestionsMenu from './QuestionsMenu';

function AppRouter() {
  return (
    <Router basename="/csc318-classmood">
      <div>
        <Route path="/" exact component={() => <StartMenu />} />
        <Route path="/lecturer/" component={() => <LecturerHome />} />
        <Route path="/create/" component={() => <CreateMenu />} />
        <Route path="/settings/" component={() => <SettingsMenu />} />
        <Route path="/questions/" component={() => <QuestionsMenu />} />
      </div>
    </Router>
  );
}

export default AppRouter;
