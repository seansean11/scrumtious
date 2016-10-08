import React, { PropTypes } from 'react';
import TicketItem from './TicketItem';

const TicketList = ({ tickets, toggleTicket, isActiveTicket }) => (
  <ul className="ticket-list">
    {tickets.tickets.map(ticket =>
      <TicketItem
        key={ticket.id}
        ticket={ticket}
        toggleTicket={toggleTicket}
        isActiveTicket={isActiveTicket} />
    )}
  </ul>
);

TicketList.propTypes = {
  tickets: PropTypes.object.isRequired,
  toggleTicket: PropTypes.func.isRequired,
  isActiveTicket: PropTypes.func.isRequired
};

export default TicketList;
