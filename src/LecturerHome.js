import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import QuestionsList from './Questions';
import NavBar from './Navbar';
import M from "materialize-css";

class LecturerHome extends React.Component {
  constructor() {
    super();
    this.questions = [
      { title: 'Why is the floyd-Marshall Algorithm O(n^3)?', votes: 5, answered: false },
      { title: 'Can you go over what a greedy algorithm is?', votes: 3, answered: false },
      { title: 'Can you explain what a minimum spanning tree is?', votes: 1, answered: false }
    ];
    this.state = {
      confused: 3,
      question: 2,
      hear: 5,
      break: 8
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  increment(mood) {
    const newState = this.state;
    newState[mood] += 1;
    this.setState(newState);
    if (newState[mood] >= 10) {
      M.Modal.getInstance(document.querySelector('.reset-mood')).open();
    }
  }

  getTopMood() {
    let topMood = Object.keys(this.state)[0];
    Object.keys(this.state).forEach(mood => {
      if (this.state[mood] > this.state[topMood]) {
        topMood = mood;
      }
    });
    return topMood;
  }

  resetTopMood() {
    const newState = this.state;
    newState[this.getTopMood()] = 0;
    this.setState(newState);
  }

  render() {
    const topMood = this.getTopMood();
    return (
      <div>
        <NavBar />
        <div className="container">
          <h3 className="center-align">Lecturer</h3>
          <div className="row">
            <div className="center-align col s6 m6 l3" onClick={() => this.increment('confused')}>
              <h5>Confused</h5>
              <div className={this.state.confused > 7 ? 'yellow' : ''}>
                <a href="#!"><h5>{this.state.confused}</h5></a>
              </div>
            </div>
            <div className="center-align col s6 m6 l3" onClick={() => this.increment('question')}>
              <h5>Question</h5>
              <div className={this.state.question > 7 ? 'yellow' : ''}>
                <a href="#!"><h5>{this.state.question}</h5></a>
              </div>
            </div>
            <div className="center-align col s6 m6 l3" onClick={() => this.increment('hear')}>
              <h5>Can't Hear/See</h5>
              <div className={this.state.hear > 7 ? 'yellow' : ''}>
                <a href="#!"><h5>{this.state.hear}</h5></a>
              </div>
            </div>
            <div className="center-align col s6 m6 l3" onClick={() => this.increment('break')}>
              <h5>Break</h5>
              <div className={this.state.break > 7 ? 'yellow' : ''}>
                <a href="#!"><h5>{this.state.break}</h5></a>
              </div>
            </div>
          </div>
          <QuestionsList questions={this.questions} />
        </div>
        <div className="right">
          <Link to="/settings" id="fixedButton" className="btn btn-floating btn-large cyan"><i className="material-icons">settings</i></Link>
        </div>
        <div className="modal black-text reset-mood">
          <div className="modal-content">
            <h4>The {topMood} counter has reached the threshold, would you like to reset it?</h4>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close left green btn-flat" onClick={() => this.resetTopMood()}>Yes</a>
            <a href="#!" className="modal-close right red btn-flat">No</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LecturerHome;
