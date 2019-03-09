import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import M from 'materialize-css';

class SettingsMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      confused: { threshold: 20, alarm: '1 Beep' },
      question: { threshold: 5, alarm: '2 Beeps' },
      hear: { threshold: 2, alarm: '1 Boop' },
      break: { threshold: 25, alarm: '2 Boops' },
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleChange(event) {
    console.log(event.target.id);
    const newState = this.state;
    newState[event.target.id]['threshold'] = event.target.value
    this.setState(newState);
  }

  renderRow(setting) {

  }

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
            <form action="#">
              <div className="col s3">"I'm Confused" Counter Threshold: <b>{this.state.confused.threshold}</b></div>
              <p className="range-field col s5">
                <input type="range" id="confused" min="0" max="100"
                  onChange={this.handleChange.bind(this)}
                />
              </p>
            </form>
            <div className="col s4">
              <a className='dropdown-trigger btn' href='#!' data-target='dropdown1'>{this.state.confused.alarm}</a>
              <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">1 Beep</a></li>
                <li><a href="#!">2 Beeps</a></li>
                <li className="divider" tabIndex="-1"></li>
                <li><a href="#!">1 Boop</a></li>
                <li><a href="#!">2 Boops</a></li>
              </ul></div>
          </div>
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
