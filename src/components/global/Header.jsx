import React, { PropTypes } from 'react';

const logo = require('../../img/logo.svg');

const Header = ({ addItem, toggleTicketsTab }) => (
  <div className="app-header">
    <img className="app-header__logo" src={logo} role="presentation" />
    <div className="app-header__btns">
      <button className="btn" onClick={addItem}>
        <i className="material-icons">add</i> <span>Add Task</span>
      </button>
      <button className="btn btn-secondary" onClick={toggleTicketsTab}>
        <i className="material-icons">dehaze</i> <span>Tickets</span>
      </button>
    </div>
  </div>
);

Header.propTypes = {
  toggleTicketsTab: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
};

export default Header;
