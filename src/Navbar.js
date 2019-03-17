import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import M from "materialize-css";

class NavBar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue">
          <a href="#!" className="brand-logo">
            <i className="material-icons">class</i>Class Mood
          </a>
          <a href="#confirm" className="right nav-button modal-trigger">
            <i className="material-icons clickable">exit_to_app</i>
          </a>
        </div>
        <div id="confirm" className="modal black-text">
          <div className="modal-content">
            <h5>Are you sure you want to quit?</h5>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close right red btn-flat">
              No
            </a>
            <Link to="/" className="modal-close left green btn-flat">
              Yes
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
