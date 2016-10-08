import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import * as ticketActions from '../../actions/ticketActions';
import * as itemActions from '../../actions/itemActions';
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
    this.props.actions.itemsAdd(this.state.activeTickets);
    this.setState({ activeTickets: [] });
    this.props.toggleTab('tickets');
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
    const activeTicket = this.state.activeTickets.filter(item => item.id === ticket.id);
    return activeTicket.length > 0;
  }

  render() {
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
          tickets={this.props.tickets}
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
  toggleTab: PropTypes.func.isRequired
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
    actions: bindActionCreators(Object.assign({}, ticketActions, itemActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketTab);
