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

  renderQuestion(question, index) {
    return (
      <div key={index}>
        <div className="card">
          <div className="row">
            {question.title}
          </div>
          <div className="row">
            <i className="right material-icons">check</i>
            <i className="right material-icons"
              onClick={() => this.delete(index)}>delete</i>
            <i className="right material-icons">arrow_upward</i>
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
