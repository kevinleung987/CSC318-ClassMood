import React from 'react';

class StudentHome extends React.PureComponent {
  render() {
    return (
      <div>
        <nav><div class="nav-wrapper blue">
          <a href="#!" class="left"><i class="material-icons">exit_to_app</i></a>
          <a href="#!" class="brand-logo"><i class="material-icons">class</i>Class Mood</a>
          <a href="#!" class="right"><i class="material-icons">question_answer</i></a>
        </div></nav>
        <div className="container">
          <div className="row">
            <h1 className="center-align">Class Mood</h1>
          </div>
        </div>
      </div>

    );
  }
}

export default StudentHome;
