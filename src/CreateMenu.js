import React from 'react';
import Navbar from './Nav';
import { Link } from 'react-router-dom';
import './styles.css';

class CreateMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <h1 className="center-align">Code:</h1>
            <h3 className="center-align">demo</h3>
            <h5 className="center-align">*Important Note: All students must use this code to access your lecture page.</h5>
          </div>
          <div className="center-align">
            <Link to="/settings" className="btn">Continue</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMenu;
