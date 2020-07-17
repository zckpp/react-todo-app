import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO, LOAD_TODOS_IN_PROGRESS, LOAD_TODOS_SUCCESS, LOAD_TODOS_FAILURE } from './actions';

/*
  state.todos = {
    data: [...],
    isLoading: boolean
  }
*/
const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      const date = new Date(todo.createdAt);
      todo.createdAt = date.toDateString();
      state.data.unshift(todo);
      return {
        ...state,
        data: state.data
      };
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== todoToRemove.id)
      };
    }
    case COMPLETE_TODO: {
      const { todo: todoToComplete } = payload;
      return {
        ...state,
        data: state.data.map(todo => {
          if (todoToComplete._id === todo._id) {
            todo.completed = true;
          }
          return todo;
        })
      };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        data: todos,
        isLoading: false
      };
    }
    case LOAD_TODOS_IN_PROGRESS: 
      return {
        ...state,
        isLoading: true
      };
    case LOAD_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default: return state;
  }
}