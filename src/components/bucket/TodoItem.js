import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {
  render() {
    const { todo, toggleTodoState } = this.props;
    const todoClass = todo.done ?
                        'bucket-list__item done' :
                        'bucket-list__item';

    return (
      <li className={todoClass}>
        <i
          className="material-icons bucket-list__state"
          onClick={() => toggleTodoState(todo)}
        >done</i>
        <h3 className="bucket-list__title">{todo.key}</h3>
        <div className="bucket-list__summary">
          <p>{todo.fields.summary}</p>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodoState: PropTypes.func.isRequired
};

export default TodoItem;
