import React, {Component} from 'react';
import LoginUI from './Login';
import Register from './Register';
import RegisterFormik from './RegisterFormik';

export default class LoginScreen extends Component {
  state = {
    isShowLoginForm: false,
  };

  navigate = () =>
    this.setState({isShowLoginForm: !this.state.isShowLoginForm});

  render() {
    const {isShowLoginForm} = this.state;
    return (
      <>
        {isShowLoginForm ? (
          <LoginUI navigate={this.navigate} />
        ) : (
          <RegisterFormik navigate={this.navigate} />
        )}
      </>
    );
  }
}
