import { createSelector } from 'reselect';

export const getTodos = state => state.todos.data;
export const getIsLoading = state => state.todos.isLoading;
export const getShowCompleted = state => state.todos.showCompleted;
export const getIsLoggedin = state => state.todos.isLoggedin;

export const getIncompleteTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => !todo.completed)
);

export const getCompletedTodos = createSelector(
  getTodos,
  (todos) => todos.filter(todo => todo.completed)
);