import test from 'ava';

import ticketsMock from '../test/ticketsMock';
import itemsMock from '../test/itemsMock';
import * as normalizeData from './normalizeData';

const newTask = {
  id: 'test',
  key: '',
  description: '',
  summary: '',
  displayName: '',
  avatar_sm: '',
  avatar_md: '',
  avatar_lg: '',
  avatar_xl: '',
  type: 'task',
  done: false
};

test('createItem(): normalizes raw Jira tickets', t => {
  const item1 = normalizeData.createItem(ticketsMock[0]);
  const item2 = normalizeData.createItem(ticketsMock[1]);

  t.deepEqual(item1, itemsMock[0]);
  t.deepEqual(item2, itemsMock[1]);
});

test('createItem(): creates a new task', t => {
  const item = normalizeData.createItem({ type: 'task', id: 'test' });
  t.deepEqual(item, newTask);
});

