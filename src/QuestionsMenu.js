import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import QuestionsList from './Questions';
import M from 'materialize-css';

class QuestionsMenu extends React.Component {

  constructor() {
    super();
    this.questions = [
      { title: 'Why is the floyd-Marshall Algorithm O(n^3)?', votes: 5 },
      { title: 'Can you go over what a greedy algorithm is?', votes: 3 },
      { title: 'Can you explain what a minimum spanning tree is?', votes: 1 }
    ];
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <Link to="/" className="left nav-button"><i className="material-icons">exit_to_app</i></Link>
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
          <Link to="/student" className="right nav-button"><i className="material-icons">home</i></Link>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Questions</h3>
          <QuestionsList questions={this.questions} />
        </div>
        <a id="fixedButton" href="#modal" className="btn btn-floating btn-large cyan modal-trigger"><i className="material-icons">add</i></a>
        <div id="modal" className="modal">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsMenu;