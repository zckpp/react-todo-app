import { 
  loadTodosInProgress, 
  loadTodosSuccess, 
  loadTodosFailure, 
  createTodo, 
  deleteTodo, 
  completeTodo,
  updateTodoTitle,
  updateTodoBody
} from './actions';

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

export const titleUpdate = (title, todo) => async (dispatch) => {
  try {
    if (title !== todo.title) {
      todo.title = title;
      const response = await fetch(`http://localhost:4000/todos/${todo._id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({ title: todo.title, body: todo.body })
      });
      const json = await response.json();
      dispatch(updateTodoTitle(json.todo));
    }
  } catch(e) {
    dispatch(loadTodosFailure());
  }
}

export const bodyUpdate = (body, todo) => async (dispatch) => {
  try {
    if (body !== todo.body) {
      todo.body = body;
      const response = await fetch(`http://localhost:4000/todos/${todo._id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({ title: todo.title, body: todo.body })
      });
      const json = await response.json();
      dispatch(updateTodoBody(json.todo));
    }
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

export const deleteTodoByID = id => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'delete'
    });
    const json = await response.json();
    dispatch(deleteTodo(json.todo));
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