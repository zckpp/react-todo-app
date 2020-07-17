import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, createTodo, removeTodo, completeTodo } from './actions';

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:4000/todos');
    const json = await response.json();
    // format date
    const todos = json.map(todo => {
      const date = new Date(todo.createdAt);
      todo.createdAt = date.toDateString();
      return todo;
    });
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

export const addTodo = (title, body) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:4000/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({ title: title, body: body })
    });
    const json = await response.json();
    dispatch(createTodo(json.todo));
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
    const response = await fetch(`http://localhost:4000/todos/${id}/complete`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'put'
    });
    const json = await response.json();
    dispatch(completeTodo(json.todo));
  } catch(e) {
    alert(e);
  }
}