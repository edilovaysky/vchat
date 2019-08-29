import React, { Component } from 'react';

export class UserSideBar extends Component {
  state = {
    classRoom: '',
    courses: '',
    tutor: '',
    userProfile: '',
  };
  handleEnter = event => {
    const { onEnter } = this.props;
    const value = event.target.id;
    onEnter(value);
    if (value == 'classRoom') {
      this.setState({
        classRoom: 'active',
        courses: '',
        tutor: '',
        userProfile: '',
      });
    }
    if (value == 'courses') {
      this.setState({
        courses: 'active',
        classRoom: '',
        tutor: '',
        userProfile: '',
      });
    }
    if (value == 'tutor') {
      this.setState({
        tutor: 'active',
        classRoom: '',
        courses: '',
        userProfile: '',
      });
    }
    if (value == 'user-profile') {
      this.setState({
        tutor: '',
        classRoom: '',
        courses: '',
        userProfile: 'active',
      });
    }

    event.preventDefault();
  };
  render() {
    const { classRoom, courses, tutor, userProfile } = this.state;
    return (
      <>
        <div className="side-nav-bar">
          <ul>
            <li className="logo">
              <img src="../../../src/assets/logo.png" alt="Neuron-logo" />
            </li>
            <li
              id="user-profile"
              className={`side-btn-${userProfile}`}
              onClick={this.handleEnter}
            >
              мой профиль
            </li>
            <li
              id="classRoom"
              className={`side-btn-${classRoom}`}
              onClick={this.handleEnter}
            >
              мой класс
            </li>
            <li
              id="courses"
              className={`side-btn-${courses}`}
              onClick={this.handleEnter}
            >
              мои курсы
            </li>
            <li
              id="tutor"
              className={`side-btn-${tutor}`}
              onClick={this.handleEnter}
            >
              мой тьютор
            </li>
          </ul>
        </div>
      </>
    );
  }
}
