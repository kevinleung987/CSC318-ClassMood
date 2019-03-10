import React from 'react';
import './styles.css';

class QuestionsList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      questions: props.questions
    };
  }

  delete(index) {
    this.state.questions.splice(index, 1);
    this.setState({ questions: this.state.questions });
  }

  upVote(index) {
    const newQuestions = this.state.questions
    newQuestions[index].votes += 1;
    this.setState({ questions: newQuestions });
  }

  answer(index) {
    const newQuestions = this.state.questions
    newQuestions[index].answered = !newQuestions[index].answered;
    this.setState({ questions: newQuestions });
  }

  renderQuestion(question, index) {
    return (
      <div key={index}>
        <div className={question.answered ? 'card grey lighten-3 white-text' : 'card'}>
          <div className="row">
            <b className="question">{question.title}</b>
          </div>
          <div className="row">
            <i className="right material-icons clickable"
              onClick={() => this.answer(index)}>check</i>
            <i className="right material-icons clickable"
              onClick={() => this.delete(index)}>delete</i>
            <i className="right material-icons clickable"
              onClick={() => this.upVote(index)}>arrow_upward</i>
            <b className="right">{question.votes}</b>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="questions-list">
        {
          this.state.questions.sort(function (a, b) {
            if (a.answered && !b.answered) return 1;
            else if (!a.answered && b.answered) return -1;
            else if (a.answered && b.answered) return 0;
            else return b.votes - a.votes;
          }).map((question, index) => this.renderQuestion(question, index))
        }
      </div>
    );
  }
}

export default QuestionsList;
