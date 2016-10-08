import React, { PropTypes } from 'react';

const logo = require('../../img/logo.svg');

const Header = ({ toggleTab }) => (
  <div className="app-header">
    <img className="app-header__logo" src={logo} role="presentation" />
    <div className="app-header__btns">
      <button className="btn" >
        <i className="material-icons">add</i> <span>Add Task</span>
      </button>
      <button className="btn btn-secondary" onClick={() => toggleTab('tickets')}>
        <i className="material-icons">dehaze</i> <span>Tickets</span>
      </button>
    </div>
  </div>
);

Header.propTypes = {
  toggleTab: PropTypes.func.isRequired
};

export default Header;
