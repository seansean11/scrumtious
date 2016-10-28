import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import BucketPage from './BucketPage';

let wrapper;

test.beforeEach(() => {
  wrapper = shallow(<BucketPage />);
});

test('renders with tab toggled off', t => {
  t.false(wrapper.find('.app-body').hasClass('[active*-]'));
});

test('toggling a tab results in tab specific class on component', t => {
  wrapper.instance().toggleTab('bucket');

  t.is(wrapper.state('activeTab'), 'bucket');
});

test('toggling the same tab results in tab removal', t => {
  wrapper.instance().toggleTab('bucket');
  wrapper.instance().toggleTab('bucket');

  t.is(wrapper.state('activeTab'), '');
});

