import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions';
import * as activeItemActions from '../../actions/activeItemActions';
import BucketItem from './BucketItem';
import Accordion from '../global/Accordion';

class BucketList extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleItemState = ::this.toggleItemState;
  }

  toggleItemState(item) {
    this.props.actions.itemEdit(Object.assign(item, { done: !item.done }));
  }

  activateItem(item) {
    this.props.activateItem(Object.assign(item, { active: !item.done }));
    this.props.toggleTab('details');
  }

  render() {
    return (
      <Accordion title="Running">
        <ul className="bucket-list">
          {this.props.items.map((item, i) =>
            <BucketItem
              key={i}
              item={item}
              activateItem={this.activateItem}
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
