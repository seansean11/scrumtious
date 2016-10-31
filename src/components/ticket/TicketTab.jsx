import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import TicketList from './TicketList';
import * as ticketActions from '../../actions/ticketActions';
import * as itemActions from '../../actions/itemActions';
import './ticket.css';

class TicketTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.props.actions.getUserTickets(this.props.auth);
    setInterval(() => this.props.actions.getUserTickets(this.props.auth), 60000);

    this.toggleTicket = ::this.toggleTicket;
    this.submitTickets = ::this.submitTickets;
    this.isActiveTicket = ::this.isActiveTicket;
  }

  submitTickets() {
    this.props.actions.itemsAdd(this.props.activeTickets);
    this.props.actions.ticketsDeactivateAll();
    this.props.toggleTab('tickets');
  }

  toggleTicket(ticket) {
    if (!this.isActiveTicket(ticket)) {
      this.props.actions.ticketsActivate(ticket);
    } else {
      this.props.actions.ticketsDeactivate(ticket);
    }
  }

  isActiveTicket(ticket) {
    const activeTicket = this.props.activeTickets.filter(active => active.id === ticket.id);
    return activeTicket.length > 0;
  }

  render() {
    const filteredTickets = _.differenceBy(this.props.tickets.tickets, this.props.items, 'id');

    return (
      <div className="tab tab__tickets">
        <header className="tab__header">
          <h1>Add Tickets</h1>
          <a
            type="button"
            className="tab__close"
            onClick={() => this.props.toggleTab('tickets')}
          >
            <i className="material-icons">close</i>
          </a>
        </header>
        <TicketList
          tickets={filteredTickets}
          toggleTicket={this.toggleTicket}
          isActiveTicket={this.isActiveTicket}
        />
        <footer className="tab__footer">
          <button className="btn" onClick={this.submitTickets}>Add Tickets</button>
        </footer>
      </div>
    );
  }
}

TicketTab.propTypes = {
  actions: PropTypes.object.isRequired,
  tickets: PropTypes.object.isRequired,
  activeTickets: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  toggleTab: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

TicketTab.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tickets: state.tickets,
    activeTickets: state.activeTickets,
    items: state.items,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ticketActions, itemActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketTab);
