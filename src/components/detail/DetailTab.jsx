import React, { Component, PropTypes } from 'react';
import DetailTodo from './DetailTodo';
import DetailTicket from './DetailTicket';
import './detail.css';

class DetailTab extends Component {
  submitItem() {
    this.props.toggleTab('details');
  }

  render() {
    return (
      <div className="tab tab__details">
        <header className="tab__header">
          <a
            type="button"
            className="tab__close"
            onClick={() => this.props.toggleTab('details')}
          >
            <i className="material-icons">close</i>
          </a>
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
  toggleTab: PropTypes.func.isRequired,
  activeItem: PropTypes.object.isRequired
};

export default DetailTab;
