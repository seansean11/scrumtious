import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import './login.css';
const logo = require('../../img/logo.svg');

class LoginPage extends Component {
  handleClick(e) {
    e.preventDefault();

    const domain = this.refs.domain;
    const username = this.refs.username;
    const password = this.refs.password;
    const creds = {
      username: username.value.trim(),
      password: password.value.trim(),
      domain: domain.value.trim()
    };

    this.props.actions.loginUser(creds, this.context.router);
  }


  render() {
    const { errorMessage } = this.props;
    return (
      <div className="login-view">
        <img className="app-logo" src={logo} role="presentation" />
        <form className="form__login">
          <input ref="username" type="text" placeholder="Username" />
          <input ref="password" type="password" placeholder="Password" />
          <input ref="domain" type="text" placeholder="yourserver.atlassian.net" />
          <button onClick={(e) => this.handleClick(e)} className="btn btn-secondary">
            Login
          </button>
          {errorMessage &&
            <p>{errorMessage}</p>
          }
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  errorMessage: PropTypes.string,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
