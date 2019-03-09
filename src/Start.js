import React from 'react';

class StartMenu extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="center-align">Class Mood</h1>
        </div>
        <div className="row">
          <div className="input-field col s10 offset-s1">
            <input
              id="lecture_id"
              type="text"
              className="validate" />
            <label htmlFor="lecture_id">Lecture ID:</label>
          </div>
        </div>
        <div className="row">
          <div className="col s4 offset-s2 waves-effect waves-light btn"
          >Attend</div>
          <div className="col s4 waves-effect waves-light orange btn">Create</div>
        </div>
      </div>
    );
  }
}

export default StartMenu;