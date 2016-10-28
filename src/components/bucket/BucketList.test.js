import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import itemsMock from '../../test/itemsMock';

import { BucketList } from './BucketList';

function setup(items, activeTab) {
  const props = {
    items,
    actions: {
      itemActivate: sinon.spy(),
      itemEdit: sinon.spy()
    },
    toggleTab: sinon.spy(),
    activeTab: activeTab || '',
    activeItem: itemsMock[0]
  };

  return shallow(<BucketList {...props} />);
}

test('renders with tickets tab open when there are no tickets', t => {
  const wrapper = setup([]);
  t.true(wrapper.instance().props.toggleTab.calledWith('tickets'));
});

test('renders with tickets tab closed when there are tickets', t => {
  const wrapper = setup(itemsMock);
  t.false(wrapper.instance().props.toggleTab.calledWith('tickets'));
});

test('toggleItemState(): toggles the done property of an item', t => {
  const wrapper = setup(itemsMock);
  const item = Object.assign(itemsMock[0], { done: !itemsMock[0].done });

  wrapper.instance().toggleItemState(itemsMock[0]);
  t.true(wrapper.instance().props.actions.itemEdit.calledWith(item));
});

test('itemActivate(): toggles the details panel with new active item', t => {
  const wrapper = setup(itemsMock);

  wrapper.instance().itemActivate(itemsMock[0]);
  t.true(wrapper.instance().props.actions.itemActivate.calledWith(itemsMock[0]));
  t.true(wrapper.instance().props.toggleTab.calledWith('details'));
});

test('itemActivate(): sets new active item if details panel is already open', t => {
  const wrapper = setup(itemsMock, 'details');

  wrapper.instance().itemActivate(itemsMock[1]);
  t.true(wrapper.instance().props.actions.itemActivate.calledWith(itemsMock[1]));
  t.false(wrapper.instance().props.toggleTab.calledWith('details'));
});

