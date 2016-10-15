import React, { Component, PropTypes } from 'react';
import DetailTodo from './DetailTodo';
import * as itemActions from '../../actions/itemActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './detail.css';

class DetailTab extends Component {
  constructor(context, props) {
    super(context, props);
    this.editItem = ::this.editItem;
  }

  editItem(html) {
    console.log(html.target.innerHTML);
  }

  render() {
    return (
      <div className="tab tab__details">
        {(this.props.activeItem !== {}) ?
          <DetailTodo
            activeItem={this.props.activeItem}
            toggleTab={this.props.toggleTab}
            editItem={this.editItem}
          />
      : ''}
      </div>
    );
  }
}

DetailTab.propTypes = {
  actions: PropTypes.object.isRequired,
  activeItem: PropTypes.object.isRequired,
  toggleTab: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeItem: state.activeItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTab);
