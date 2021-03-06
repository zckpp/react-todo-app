import { 
  loadTodosInProgress, 
  loadTodosSuccess, 
  loadTodosFailure, 
  createTodo, 
  deleteTodo, 
  completeTodo,
  updateTodoTitle,
  updateTodoBody,
  setIsLoggedin,
  setLoginErrorMessage
} from './actions';

const resourceUrl = 'http://localhost:4000';

export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch(`${resourceUrl}/todos`);
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
      const response = await fetch(`${resourceUrl}/todos/${todo._id}`, {
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
      const response = await fetch(`${resourceUrl}/todos/${todo._id}`, {
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
    const response = await fetch(`${resourceUrl}/todos`, {
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
    const response = await fetch(`${resourceUrl}/todos/${id}`, {
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
    const response = await fetch(`${resourceUrl}/todos/${id}/complete`, {
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

export const userLogin = (username, password) =>  async (dispatch) => {
  try {
    if (username === 'admin' && password === 'admin') {
      dispatch(setIsLoggedin(true));
    } else if (username !== 'admin') {
      dispatch(setLoginErrorMessage('No username found.'));
    } else {
      dispatch(setLoginErrorMessage('Wrong password.'));
    }
    
  } catch(e) {
    alert(e);
  }
}