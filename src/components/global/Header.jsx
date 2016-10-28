import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as itemActions from '../../actions/itemActions';
import * as authActions from '../../actions/authActions';

const logo = require('../../img/logo.svg');

export class Header extends Component {
  constructor(props) {
    super(props);
    this.newItem = ::this.newItem;
  }

  newItem() {
    const avatar = this.props.actions.getUserAvatar();
    this.props.actions.itemAdd({ type: 'todo', avatar_xl: avatar });
    this.props.toggleTab('details');
  }

  render() {
    return (
      <div className="app-header">
        <img className="app-header__logo" src={logo} role="presentation" />
        <div className="app-header__btns">
          <button className="btn" onClick={this.newItem}>
            <i className="material-icons">add</i> <span>Add Task</span>
          </button>
          <button className="btn btn-secondary" onClick={() => this.props.toggleTab('tickets')}>
            <i className="material-icons">dehaze</i> <span>Tickets</span>
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  toggleTab: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, itemActions, authActions), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);
