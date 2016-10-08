import React, { Component, PropTypes } from 'react';
import './tab.css';

class DetailTab extends Component {
  render() {
    return (
      <div className="tab">
        <header className="tab__header">
          <h1>Add Details</h1>
          <a
            href=""
            className="tab__close"
            onClick={this.props.toggleDetailsTab}
          >
            <i className="material-icons">close</i>
          </a>
        </header>
        <footer className="tab__footer">
          <button className="btn" onClick={this.submitDetails}>Add Details</button>
        </footer>
      </div>
    );
  }
}

DetailTab.propTypes = {
  toggleDetailsTab: PropTypes.func.isRequired
};

export default DetailTab;
