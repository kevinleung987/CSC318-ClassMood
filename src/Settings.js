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
          Settings</div>
      </div>
    );
  }
}

export default SettingsMenu;
