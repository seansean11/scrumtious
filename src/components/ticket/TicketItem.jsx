import React, { Component, PropTypes } from 'react';
import marked from 'marked';

class TicketItem extends Component {
  buildDescription() {
    return marked(this.props.ticket.fields.description, (err, content) => { __html: content });
  }

  render() {
    const { ticket, isActiveTicket, toggleTicket } = this.props;
    const ticketClass = isActiveTicket(ticket) ?
                          'ticket-list__item active' :
                          'ticket-list__item';

    return (
      <li className={ticketClass} onClick={() => toggleTicket(ticket)}>
        <h3 className="ticket-list__title">{ticket.key}:</h3>
        <span className="ticket-list__active" />
        <div className="ticket-list__summary">
          <p>{ticket.fields.summary}</p>
          {/* <span dangerouslySetInnerHTML={buildDescription()} /> */}
        </div>
      </li>
    );
  }
}

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
  toggleTicket: PropTypes.func.isRequired,
  isActiveTicket: PropTypes.func.isRequired
};

export default TicketItem;
