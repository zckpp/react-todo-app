export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = todo => ({
  type: REMOVE_TODO,
  payload: { todo }
});

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = todo => ({
  type: COMPLETE_TODO,
  payload: { todo }
});

export const UPDATE_TODO_TITLE = 'UPDATE_TODO_TITLE';
export const updateTodoTitle = todo => ({
  type: UPDATE_TODO_TITLE,
  payload: { todo }
});

export const UPDATE_TODO_BODY = 'UPDATE_TODO_BODY';
export const updateTodoBody = todo => ({
  type: UPDATE_TODO_BODY,
  payload: { todo }
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos }
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});

export const VIEW_INCOMPLETE_TODOS = 'VIEW_INCOMPLETE_TODOS';
export const viewIncompleteTodos = () => ({
  type: VIEW_INCOMPLETE_TODOS,
});

export const VIEW_COMPLETE_TODOS = 'VIEW_COMPLETE_TODOS';
export const viewCompleteTodos = () => ({
  type: VIEW_COMPLETE_TODOS,
});