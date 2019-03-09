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
        <div className={question.answered ? 'card green' : 'card'}>
          <div className="row">
            {question.title}
          </div>
          <div className="row">
            <i className="right material-icons"
              onClick={() => this.answer(index)}>check</i>
            <i className="right material-icons"
              onClick={() => this.delete(index)}>delete</i>
            <i className="right material-icons"
              onClick={() => this.upVote(index)}>arrow_upward</i>
            <b className="votes right">{question.votes}</b>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          this.state.questions.map((question, index) => this.renderQuestion(question, index))
        }
      </div>
    );
  }
}

export default QuestionsList;
