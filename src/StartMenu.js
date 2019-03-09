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
          <div className="input-field col s10 offset-s1">
            <input
              id="lecture_id"
              type="text"
              className="validate"
            />
            <label htmlFor="lecture_id">Lecture ID:</label>
          </div>
        </div>
        <div className="row">
          <Link
            to="/student"
            className="col s6 offset-s3 waves-effect waves-light btn"
          >
            Attend
          </Link>
        </div>
        <div className="row">
          <Link
            to="/create"
            className="col s6 offset-s3 waves-effect waves-light orange btn">Create</Link>
        </div>
      </div>
    );
  }
}

export default StartMenu;
