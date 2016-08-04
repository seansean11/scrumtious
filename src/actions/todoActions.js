import * as types from './actionTypes';

export function todosAdd(todos) {
  return {
    type: types.TODOS_ADD,
    todos
  };
}

export function todoAdd(todo) {
  return {
    type: types.TODO_ADD,
    todo
  };
}

export function todoDelete(index) {
  return {
    type: types.TODO_DELETE,
    index
  };
}

export function todoEdit(todo) {
  return {
    type: types.TODO_EDIT,
    todo
  };
}

export function todoMove(indexOld, indexNew) {
  return {
    type: types.TODO_MOVE,
    indexOld,
    indexNew
  };
}


