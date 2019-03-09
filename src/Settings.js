import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SettingsMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <Link to="/" className="left nav-button"><i className="material-icons">exit_to_app</i></Link>
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Settings</h3>
          <div className="row">
            <div className="left">
              <div className="blue btn">Default</div>
            </div>
            <div className="right">
              <Link to="/lecturer" className="green btn">Done</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsMenu;
