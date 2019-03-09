import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Navbar extends React.PureComponent {
  render() {
    return (
      <nav><div className="nav-wrapper blue">
        <Link to="/" className="left nav-button"><i className="material-icons">exit_to_app</i></Link>
        <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
        <Link to="/questions" className="right nav-button"><i className="material-icons">question_answer</i></Link>
      </div></nav>
    );
  }
}

export default Navbar;
