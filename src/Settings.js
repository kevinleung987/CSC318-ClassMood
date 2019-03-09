import React from 'react';
import Navbar from './Nav';
import { Link } from 'react-router-dom';
import './styles.css';

class SettingsMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
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
