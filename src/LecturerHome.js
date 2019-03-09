import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class LecturerHome extends React.PureComponent {
  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <Link to="/" className="left nav-button"><i className="material-icons">exit_to_app</i></Link>
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Lecturer</h3>
          <h5 className="center-align">Code: demo</h5>
        </div>
      </div>
    );
  }
}

export default LecturerHome;
