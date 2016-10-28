import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Reorder from 'react-reorder';

import * as itemActions from '../../actions/itemActions';
import BucketItem from './BucketItem';
import Accordion from '../global/Accordion';

export class BucketList extends Component {
  constructor(props, context) {
    super(props, context);
    if (!this.props.items.length) this.props.toggleTab('tickets');

    this.itemActivate = ::this.itemActivate;
    this.toggleItemState = ::this.toggleItemState;
  }

  itemActivate(item) {
    if (item.id !== this.props.activeItem.id && this.props.activeTab === 'details') {
      this.props.actions.itemActivate(item);
    } else {
      this.props.actions.itemActivate(item);
      this.props.toggleTab('details');
    }
  }

  toggleItemState(item) {
    this.props.actions.itemEdit(Object.assign(item, { done: !item.done }));
  }

  render() {
    const sharedProps = {
      toggleItemState: this.toggleItemState,
      itemActivate: this.itemActivate
    };

    return (
      <Accordion title="Running">
        <Reorder
          itemKey="id"
          lock="horizontal"
          holdTime="0"
          list={this.props.items}
          template={BucketItem}
          listClass="bucket-list"
          itemClass="bucket-list__item"
          sharedProps={sharedProps}
        />
      </Accordion>
    );
  }
}

BucketList.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  activeItem: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  toggleTab: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items,
    activeItem: state.activeItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
