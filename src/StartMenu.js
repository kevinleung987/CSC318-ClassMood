import React from 'react';
import { Link } from 'react-router-dom';

class StartMenu extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="center-align">Class Mood</h1>
        </div>
        <div className="row">
          <Link
            to="/questions"
            className="col s6 offset-s3 waves-effect waves-light btn">Student</Link>
        </div>
        <div className="row">
          <Link
            to="/settings"
            className="col s6 offset-s3 waves-effect waves-light orange btn">Lecturer</Link>
        </div>
      </div>
    );
  }
}

export default StartMenu;
