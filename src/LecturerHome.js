import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import QuestionsList from './Questions';
import NavBar from './Navbar';

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

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h3 className="center-align">Lecturer</h3>
          <div className="row">
            <div className="center-align col s6 m6 l3">
              <h5>Confused</h5>
              <a href="#!">{this.state.confused}</a>
            </div>
            <div className="center-align col s6 m6 l3">
              <h5>Question</h5>
              <a href="#!">{this.state.question}</a>
            </div>
            <div className="center-align col s6 m6 l3">
              <h5>Can't Hear/See</h5>
              <a href="#!">{this.state.hear}</a>
            </div>
            <div className="center-align col s6 m6 l3">
              <h5>Break</h5>
              <a href="#!">{this.state.break}</a>
            </div>
          </div>
          <QuestionsList questions={this.questions} />
        </div>
        <div className="right">
          <Link to="/settings" id="fixedButton" className="btn btn-floating btn-large cyan"><i className="material-icons">settings</i></Link>
        </div>
      </div>
    );
  }
}

export default LecturerHome;
