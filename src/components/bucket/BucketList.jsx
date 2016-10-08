import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import BucketItem from './BucketItem';
import Accordion from '../global/Accordion';

class BucketList extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleItemState = ::this.toggleItemState;
    this.editItem = ::this.editItem;
  }
  editItem(newItem) {
    this.props.actions.itemEdit(newItem);
  }

  toggleItemState(item) {
    this.editItem(Object.assign(item, { done: !item.done }));
    this.forceUpdate();
  }

  render() {
    return (
      <Accordion title="Running">
        <ul className="bucket-list">
          {this.props.items.map(item =>
            <BucketItem
              key={item.id}
              item={item}
              toggleTab={this.props.toggleTab}
              toggleItemState={this.toggleItemState}
            />
          )}
        </ul>
      </Accordion>
    );
  }
}

BucketList.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  toggleTab: PropTypes.func.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
