import React, { PropTypes } from 'react';

const ScrumItem = ({ ticket }) => (
  <article className="item-card--ticket">
    <h3>{ticket.title}</h3>
    <time date-time={ticket.date}></time>
  </article>
);

ScrumItem.propTypes = {
  ticket: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default ScrumItem;
