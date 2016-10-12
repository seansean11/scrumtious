import React, { PropTypes, Component } from 'react';
import TicketTab from '../ticket/TicketTab';
import DetailTab from '../detail/DetailTab';
import BucketList from './BucketList';
import Header from '../global/Header';
import Navigation from '../global/Navigation';
import './bucket.css';

class BucketPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTab: '',
    };

    this.toggleTab = ::this.toggleTab;
  }

  toggleTab(tabName) {
    const newName = tabName === this.state.activeTab ? '' : tabName;
    this.setState({ activeTab: newName });
  }

  render() {
    const appClass = this.state.activeTab.length ?
      `app-body active-${this.state.activeTab}` :
      'app-body';

    return (
      <div className={appClass}>
        <Navigation />
        <div className="app-view bucket-view">
          <Header
            toggleTab={this.toggleTab}
          />
          <BucketList
            toggleTab={this.toggleTab}
          />
        </div>
        <TicketTab toggleTab={this.toggleTab} />
        <DetailTab toggleTab={this.toggleTab} />
      </div>
    );
  }
}

BucketPage.propTypes = {
  children: PropTypes.object
};

export default BucketPage;
