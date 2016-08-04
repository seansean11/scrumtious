import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';
import Accordion from '../global/Accordion';

const BucketList = ({ todos, toggleTodoState }) => (
  <Accordion title="Running">
    <ul className="bucket-list">
      {todos.map(todo =>
        <TodoItem key={todo.id} todo={todo} toggleTodoState={toggleTodoState}/>
      )}
    </ul>
  </Accordion>
);

BucketList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodoState: PropTypes.func.isRequired
};

export default BucketList;
