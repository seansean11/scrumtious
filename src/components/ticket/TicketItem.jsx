import React, { PropTypes } from 'react';

const TicketItem = ({ ticket, toggleTicket, isActiveTicket }) => {
  const ticketClass = isActiveTicket(ticket) ?
                        'ticket-list__item card active' :
                        'ticket-list__item card';

  return (
    <li className={ticketClass} onClick={() => toggleTicket(ticket)}>
      <h3 className="ticket-list__title">{ticket.key}:</h3>
      <span className="ticket-list__active" />
      <div className="ticket-list__summary">
        <p>{ticket.summary}</p>
      </div>
    </li>
  );
};

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
  toggleTicket: PropTypes.func.isRequired,
  isActiveTicket: PropTypes.func.isRequired
};

export default TicketItem;
