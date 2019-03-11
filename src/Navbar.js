import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

class NavBar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <nav><div className="nav-wrapper blue">
        <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
        <a href="#confirm" className="right nav-button modal-trigger"><i className="material-icons">exit_to_app</i></a>
      </div>
        <div id="confirm" class="modal black-text">
          <div class="modal-content">
            <h5>Are you sure you want to quit?</h5>
          </div>
          <div class="modal-footer">
            <Link to="/" class="modal-close left btn-flat">Yes</Link>
            <a href="#!" class="modal-close right btn-flat">No</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
