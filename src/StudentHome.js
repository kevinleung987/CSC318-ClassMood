import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class StudentHome extends React.Component {
  constructor() {
    super();
    this.state = {
      confused: false,
      question: false,
      hear: false,
      break: false
    };
  }

  handleClick(event) {
    console.log(event.target.id);
    const target = event.target.id;
    switch (target) {
      case 'confused':
        this.setState({ ...this.state, confused: !this.state.confused }); break;
      case 'question':
        this.setState({ ...this.state, question: !this.state.question }); break;
      case 'hear':
        this.setState({ ...this.state, hear: !this.state.hear }); break;
      case 'break':
        this.setState({ ...this.state, break: !this.state.break }); break;
      default: break;
    }
  }

  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <Link to="/" className="left nav-button"><i className="material-icons">exit_to_app</i></Link>
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
          <Link to="/questions" className="right nav-button"><i className="material-icons">list</i></Link>
        </div></nav>
        <div className="container">
          <div className="row">
            <h1 className="center-align">I/I'm...</h1>
          </div>
          <div className="row">
            <div className="col s8 offset-s2">
              <div className="left">
                <div
                  id="confused"
                  className={this.state.confused ? 'btn yellow' : 'btn grey'}
                  onClick={this.handleClick.bind(this)}>Confused</div>
              </div>
              <div className="right">
                <div
                  id="question"
                  className={this.state.question ? 'btn purple' : 'btn grey'}
                  onClick={this.handleClick.bind(this)}>Have a Question</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s8 offset-s2">
              <div className="left">
                <div
                  id="hear"
                  className={this.state.hear ? 'btn orange' : 'btn grey'}
                  onClick={this.handleClick.bind(this)}>Can't Hear</div>
              </div>
              <div className="right">
                <div
                  id="break"
                  className={this.state.break ? 'btn green' : 'btn grey'}
                  onClick={this.handleClick.bind(this)}>Need a Break</div>
              </div>
            </div>
          </div>
          <div className="center">
            <Link to="/questions" className="blue btn">Write a Question</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentHome;
