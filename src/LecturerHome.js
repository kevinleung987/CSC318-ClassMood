import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import QuestionsList from './Questions';

class LecturerHome extends React.Component {

  constructor() {
    super();
    this.questions = [
      { title: 'Why is the floyd-Marshall Algorithm O(n^3)?', votes: 5, answered: false },
      { title: 'Can you go over what a greedy algorithm is?', votes: 3, answered: false },
      { title: 'Can you explain what a minimum spanning tree is?', votes: 1, answered: false }
    ];
  }

  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <Link to="/" className="left nav-button"><i className="material-icons">exit_to_app</i></Link>
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Lecturer</h3>
          <h5 className="center-align">Code: demo</h5>
          <QuestionsList questions={this.questions} />
        </div>
      </div>
    );
  }
}

export default LecturerHome;
