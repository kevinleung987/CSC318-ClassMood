import React from 'react';
import './styles.css';

class QuestionsList extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [
        { title: 'Why is the floyd-Marshall Algorithm O(n^3)?', votes: 5 },
        { title: 'Can you go over what a greedy algorithm is?', votes: 3 },
        { title: 'Can you explain what a minimum spanning tree is?', votes: 1 }
      ]
    }
  }

  render() {
    return (
      <div>
        {

        }
      </div>
    );
  }
}

export default QuestionsList;
