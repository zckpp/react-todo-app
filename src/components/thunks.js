import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo, removeTodo, completeTodo } from './actions';

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('/list.json');
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch(e) {
    dispatch(loadTodosFailure());
  }
}

export const titleUpdate = (title, id) => async (dispatch) => {
  try {
    console.log(title, id);
  } catch(e) {
    dispatch(loadTodosFailure());
  }
}

export const bodyUpdate = (body, id) => async (dispatch) => {
  try {
    console.log(body, id);
  } catch(e) {
    dispatch(loadTodosFailure());
  }
}

export const addTodo = text => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch(e) {
    alert(e);
  }
}

export const deleteTodo = id => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete'
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch(e) {
    alert(e);
  }
}

export const setCompleteTodo = id => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post'
    });
    const todo = await response.json();
    dispatch(completeTodo(todo));
  } catch(e) {
    alert(e);
  }
}