import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { Header } from './Header';

let wrapper;

test.beforeEach(() => {
  const props = {
    toggleTab: sinon.spy(),
    actions: {
      itemAdd: sinon.spy()
    }
  };

  wrapper = shallow(<Header {...props} />);
});

test('new task button adds a new task and opens it in the details tab', t => {
  const btn = wrapper.find('.btn').first();
  const newItem = { type: 'todo' };

  btn.simulate('click');
  t.true(wrapper.instance().props.actions.itemAdd.calledWith(newItem));
  t.true(wrapper.instance().props.toggleTab.calledWith('details'));
});

test('open tickets button opens the tickets tab', t => {
  const btn = wrapper.find('.btn').last();

  btn.simulate('click');
  t.true(wrapper.instance().props.toggleTab.calledWith('tickets'));
});



