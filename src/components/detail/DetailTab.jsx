import React, { Component, PropTypes } from 'react';
import DetailTodo from './DetailTodo';
import DetailTicket from './DetailTicket';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './detail.css';

class DetailTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.setState({
      activeItem: this.props.items[this.props.params.itemId]
    });
  }

  submitItem() {
    this.props.toggleTab('details');
  }

  toggleDetialsTab(selectedItem) {
    this.props.toggleTab('details');
  }

  render() {
    return (
      <div className="tab tab__details">
        <header className="tab__header">
          <button
            className="tab__close"
            onClick={() => this.props.toggleTab('details')}
          >
            <i className="material-icons">close</i>
          </button>
        </header>
        {true ?
          <DetailTodo activeItem="this.props.activeItem" /> :
          <DetailTicket activeItem="this.props.activeItem" />
        }
      </div>
    );
  }
}

DetailTab.propTypes = {
  toggleTab: PropTypes.func.isRequired
};

export default DetailTab;
