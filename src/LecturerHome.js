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
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
          <Link to="/" className="right nav-button"><i className="material-icons">exit_to_app</i></Link>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Lecturer</h3>
          <div className="row">
              <div className="center-align col s12 m6 l3">
                <h5 className="">Confused</h5>
                <a className="">3</a>
              </div>
              <div className="center-align col s12 m6 l3">
                <h5 className="">Question</h5>
                <a className="">2</a>
              </div>
              <div className="center-align col s12 m6 l3">
                <h5 className="">Hear</h5>
                <a className="">5</a>
              </div>
              <div className="center-align col s12 m6 l3">
                <h5 className="">Break</h5>
                <a className="">8</a>
              </div>
          </div>         
          <QuestionsList questions={this.questions} />
        </div>
            <div className="right">
              <Link to="/settings" id="fixedButton" className="btn btn-floating btn-large cyan modal-trigger"><i className="material-icons">settings</i></Link>
            </div>
      </div>
    );
  }
}

export default LecturerHome;
