import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import M from 'materialize-css';

class SettingsMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      confused: { title: '"I\'m confused"', threshold: 20, alarm: '1 Beep' },
      question: { title: '"I have a question"', threshold: 5, alarm: '2 Beeps' },
      hear: { title: '"I can\'t hear"', threshold: 2, alarm: '1 Boop' },
      break: { title: '"I need a break"', threshold: 25, alarm: '2 Boops' }
    }
    this.default = {
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
    const newState = this.state;
    newState[event.target.id]['threshold'] = event.target.value
    this.setState(newState);
  }

  resetSetting() {
    const newState = this.state;
    newState['confused'].threshold = this.default['confused'].threshold;
    newState['question'].threshold = this.default['question'].threshold;
    newState['hear'].threshold = this.default['hear'].threshold;
    newState['break'].threshold = this.default['break'].threshold;
    this.setState(newState);
  }

  renderRow(setting) {
    return (
      <div className="row" key={setting}>
        <form action="#">
          <div className="col s3">{this.state[setting].title} Counter Threshold: <b>{this.state[setting].threshold}</b></div>
          <p className="range-field col s5">
            <input type="range" id={setting} min="0" max="100"
              onChange={this.handleChange.bind(this)}
              value={this.state[setting].threshold}
            />
          </p>
        </form>
        <div className="col s4">
          <a className='dropdown-trigger btn' href='#!' data-target='dropdown1'>{this.state[setting].alarm}</a>
          <ul id='dropdown1' className='dropdown-content'>
            <li><a href="#!">1 Beep</a></li>
            <li><a href="#!">2 Beeps</a></li>
            <li className="divider" tabIndex="-1"></li>
            <li><a href="#!">1 Boop</a></li>
            <li><a href="#!">2 Boops</a></li>
          </ul></div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
          <Link to="/" className="right nav-button"><i className="material-icons">exit_to_app</i></Link>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Class Settings</h3>
          {['confused', 'question', 'hear', 'break'].map(setting => this.renderRow(setting))}
          <div className="row">
            <div className="left">
              <div className="blue btn" onClick={() => this.resetSetting()}>Default</div>
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
