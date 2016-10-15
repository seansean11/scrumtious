import React, { Component, PropTypes } from 'react';

class Accordion extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { open: true };
    this.clickHandler = ::this.clickHandler;
  }

  clickHandler() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const accordionClass = this.state.open ?
                            'accordion open' :
                            'accordion';
    return (
      <div className={accordionClass}>
        <h2 className="accordion__title" onClick={this.clickHandler}>
          <i className="material-icons">keyboard_arrow_down</i>{this.props.title}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default Accordion;
