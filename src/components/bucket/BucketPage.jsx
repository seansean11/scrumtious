import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import TicketTab from '../ticket/TicketTab';
import DetailTab from '../detail/DetailTab';
import BucketList from './BucketList';
import Header from '../global/Header';
import Navigation from '../global/Navigation';
import './bucket.css';

class BucketPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ticketsTab: false,
      detailsTab: false,
      activeItem: null
    };
    this.addItem = ::this.addItem;
    this.toggleTicketsTab = ::this.toggleTicketsTab;
    this.toggleItemState = ::this.toggleItemState;
    this.toggleDetailsTab = ::this.toggleDetailsTab;
  }

  addItem(item) {
    this.props.actions.itemAdd(item);
  }

  editItem(newItem) {
    this.props.actions.itemEdit(newItem);
  }

  toggleDetailsTab(item) {
    this.setState({ detailsTab: !this.state.detailsTab, activeItem: item });
  }

  toggleTicketsTab() {
    this.setState({ ticketsTab: !this.state.ticketsTab });
  }

  toggleItemState(item) {
    this.editItem(Object.assign(item, { done: !item.done }));
    this.forceUpdate();
  }

  render() {
    const activeClass = this.state.ticketsTab ? 'app-body active' : 'app-body';
    return (
      <div className={activeClass}>
        <Navigation />
        <div className="app-view bucket-view">
          <Header
            addItem={this.addItem}
            toggleTicketsTab={this.toggleTicketsTab}
          />
          <BucketList
            items={this.props.items}
            toggleItemState={this.toggleItemState}
            toggleDetailsTab={this.toggleDetailsTab}
          />
        </div>
        <TicketTab toggleTicketsTab={this.toggleTicketsTab} />
        <DetailTab
          toggleDetailsTab={this.toggleTicketsTab}
          activeItem={this.state.activeItem}
        />
      </div>
    );
  }
}

BucketPage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketPage);
