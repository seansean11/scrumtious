import React, { Component, PropTypes } from 'react';
import Tab from '../global/Tab';
import DetailTodo from './DetailTodo';
import DetailTicket from './DetailTicket';
import './detail.css';

class DetailTab extends Component {
  constructor(props, context) {
    super(props, context);
  }

  submitDetails() {
    this.props.toggleDetailsTab();
  }

  render() {
    return (
      <div>
        <Tab />
      </div>
    );
  }
}

DetailTab.propTypes = {
  toggleDetailsTab: PropTypes.func.isRequired
};

export default DetailTab;
