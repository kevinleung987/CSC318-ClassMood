import React from 'react';
import Navbar from './Nav';
import './styles.css';
import QuestionsList from './Questions';

class QuestionsMenu extends React.PureComponent {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="center-align">Questions</h3>
          <QuestionsList />
        </div>
      </div>
    );
  }
}

export default QuestionsMenu;