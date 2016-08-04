import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import * as ticketActions from '../../actions/ticketActions';
import * as todoActions from '../../actions/todoActions';
import './ticket.css';

class TicketTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.props.actions.getUserTickets();
    setInterval(() => {
      this.props.actions.getUserTickets();
    }, 60000);

    this.state = { activeTickets: [] };
    this.toggleTicket = ::this.toggleTicket;
    this.submitTickets = ::this.submitTickets;
    this.isActiveTicket = ::this.isActiveTicket;
  }

  submitTickets() {
    this.props.actions.todosAdd(this.state.activeTickets);
    this.setState({ activeTickets: [] });
    this.props.toggleTicketsTab();
  }

  toggleTicket(ticket) {
    if (!this.isActiveTicket(ticket)) {
      this.setState({ activeTickets: [...this.state.activeTickets, ticket] });
    } else {
      this.state.activeTickets.forEach((item, i) => {
        if (item.id === ticket.id) {
          this.setState({ activeTickets: [...this.state.activeTickets.slice(0, i),
                                            ...this.state.activeTickets.slice(i + 1)] });
        }
      });
    }
  }

  isActiveTicket(ticket) {
    const activeTicket = this.state.activeTickets.filter((item) => item.id === ticket.id);
    return activeTicket.length > 0;
  }

  render() {
    return (
      <div className="ticket-tab">
        <header className="ticket-header">
          <h1>Add Tickets</h1>
          <span className="ticket-close" onClick={this.props.toggleTicketsTab}>
            <i className="material-icons">close</i>
          </span>
        </header>
        <TicketList
          tickets={this.props.tickets}
          toggleTicket={this.toggleTicket}
          isActiveTicket={this.isActiveTicket}
        />
        <footer className="ticket-footer">
          <button className="btn" onClick={this.submitTickets}>Add Tickets</button>
        </footer>
      </div>
    );
  }
}

TicketTab.propTypes = {
  actions: PropTypes.object.isRequired,
  tickets: PropTypes.object.isRequired,
  toggleTicketsTab: PropTypes.func.isRequired
};

TicketTab.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tickets: state.tickets
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, ticketActions, todoActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketTab);
