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
    this.itemActivate = ::this.itemActivate;
  }

  toggleItemState(item) {
    this.props.actions.itemEdit(Object.assign(item, { done: !item.done }));
  }

  itemActivate(item) {
    if (item.id !== this.props.activeItem.id && this.props.activeTab === 'details') {
      this.props.actions.itemActivate(item);
    } else {
      this.props.actions.itemActivate(item);
      this.props.toggleTab('details');
    }
  }

  render() {
    return (
      <Accordion title="Running">
        <ul className="bucket-list">
          {this.props.items.map(item =>
            <BucketItem
              key={item.id}
              item={item}
              itemActivate={this.itemActivate}
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
