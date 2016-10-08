import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => (
  <nav className="app-nav">
    <IndexLink to="/" activeClassName="active" className="app-nav__item">
      <i className="material-icons">done_all</i>
    </IndexLink>
  </nav>
);

export default Navigation;
