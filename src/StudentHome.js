import React from 'react';
import './styles.css';
import QuestionsList from './Questions';
import M from 'materialize-css';
import NavBar from './Navbar';

class StudentHome extends React.Component {
  constructor() {
    super();
    this.questions = [
      { title: 'Why is the floyd-Marshall Algorithm O(n^3)?', votes: 5, answered: false },
      { title: 'Can you go over what a greedy algorithm is?', votes: 3, answered: false },
      { title: 'Can you explain what a minimum spanning tree is?', votes: 1, answered: false }
    ];
    this.state = {
      confused: false,
      question: false,
      hear: false,
      break: false
    };
  }

  componentDidUpdate() {
    M.AutoInit();
  }

  postQuestion() {
    this.questions.push({ title: document.querySelector('#newQuestion').value, votes: 0, answered: false });
  }

  handleClick(event) {
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
        <NavBar isStudent={true} />
        <div className="row">
          <div className="center-align col s6 m6 l3">
            <h5>Confused</h5>
            <div
              id="confused"
              className={this.state.confused ? 'btn-floating btn yellow' : 'btn-floating btn grey lighten-3'}
              onClick={this.handleClick.bind(this)}></div>
          </div>
          <div className="center-align col s6 m6 l3">
            <h5>Question</h5>
            <div
              id="question"
              className={this.state.question ? 'btn-floating btn purple' : 'btn-floating btn grey lighten-3'}
              onClick={this.handleClick.bind(this)}></div>
          </div>
          <div className="center-align col s6 m6 l3">
            <h5>Can't Hear/See</h5>
            <div
              id="hear"
              className={this.state.hear ? 'btn-floating btn orange' : 'btn-floating btn grey lighten-3'}
              onClick={this.handleClick.bind(this)}></div>
          </div>
          <div className="center-align col s6 m6 l3">
            <h5>Break</h5>
            <div
              id="break"
              className={this.state.break ? 'btn-floating btn green' : 'btn-floating btn grey lighten-3'}
              onClick={this.handleClick.bind(this)}></div>
          </div>
        </div>
        <div className="container">
          <h3 className="center-align">Questions</h3>
          <QuestionsList questions={this.questions} isStudent={true} />
        </div>
        <a id="fixedButton" href="#modal" className="btn btn-floating btn-large cyan modal-trigger"><i className="material-icons">add</i></a>
        <div id="modal" className="modal">
          <div className="modal-content">
            <h4>Write Your Question</h4>
            <div className="input-field col s8">
              <input
                id="newQuestion"
                type="text"
                className="validate"
              />
              <label htmlFor="newQuestion">Question:</label>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat" onClick={() => this.postQuestion()}>Post</a>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentHome;
