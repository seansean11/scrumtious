import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoActions';
import TicketTab from '../ticket/TicketTab';
import BucketList from './BucketList';
import Header from '../global/Header';
import Navigation from '../global/Navigation';
import './bucket.css';

class BucketPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { ticketsTab: false };
    this.addTodo = ::this.addTodo;
    this.toggleTicketsTab = ::this.toggleTicketsTab;
    this.toggleTodoState = ::this.toggleTodoState;
  }

  addTodo(todo) {
    this.props.actions.addTodo(todo);
  }

  toggleTicketsTab() {
    this.setState({ ticketsTab: !this.state.ticketsTab });
  }

  toggleTodoState(todo) {
    this.props.actions.todoEdit(Object.assign(todo, { done: !todo.done }));
    this.forceUpdate();
  }

  render() {
    const activeClass = this.state.ticketsTab ? 'app-body active' : 'app-body';
    return (
      <div className={activeClass}>
        <Navigation />
        <div className="app-view bucket-view">
          <Header
            addTodo={this.addTodo}
            toggleTicketsTab={this.toggleTicketsTab}
          />
          <BucketList todos={this.props.todos} toggleTodoState={this.toggleTodoState} />
        </div>
        <TicketTab toggleTicketsTab={this.toggleTicketsTab} />
      </div>
    );
  }
}

BucketPage.propTypes = {
  actions: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketPage);
