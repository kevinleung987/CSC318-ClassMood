import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import M from "materialize-css";

class NavBar extends React.Component {
  constructor(props) {
    super();
  }

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
            <h4>Are you sure you want to quit?</h4>
            {this.props.isStudent ? null :
              <div>
                <h5>Enter your Email to save unanswered questions.</h5>
                <div className="input-field">
                  <input
                    id="email"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            }
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
