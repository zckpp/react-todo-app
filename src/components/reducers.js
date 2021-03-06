import { 
  CREATE_TODO, 
  DELETE_TODO, 
  COMPLETE_TODO,
  UPDATE_TODO_TITLE,
  UPDATE_TODO_BODY, 
  LOAD_TODOS_IN_PROGRESS, 
  LOAD_TODOS_SUCCESS, 
  LOAD_TODOS_FAILURE,
  VIEW_INCOMPLETE_TODOS,
  VIEW_COMPLETE_TODOS,
  SET_IS_LOGGEDIN,
  SET_LOGIN_ERROR_MESSAGE
} from './actions';

/*
  state.todos = {
    data: [...],
    isLoading: boolean,
    showCompleted: boolean
  }
*/
const initialState = { isLoading: false, data: [], showCompleted: false };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      const date = new Date(todo.createdAt);
      todo.createdAt = date.toDateString();
      return {
        ...state,
        data: [todo, ...state.data]
      };
    }
    case DELETE_TODO: {
      const { todo: todoToDelete } = payload;
      return {
        ...state,
        data: state.data.filter(todo => todo._id !== todoToDelete._id)
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
    case UPDATE_TODO_TITLE: {
      const { todo: todoToUpdate } = payload;
      return {
        ...state,
        data: state.data.map(todo => {
          if (todoToUpdate._id === todo._id) {
            todo.title = todoToUpdate.title;
          }
          return todo;
        })
      };
    }
    case UPDATE_TODO_BODY: {
      const { todo: todoToUpdate } = payload;
      return {
        ...state,
        data: state.data.map(todo => {
          if (todoToUpdate._id === todo._id) {
            todo.body = todoToUpdate.body;
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
    case VIEW_INCOMPLETE_TODOS:
      return {
        ...state,
        showCompleted: false
      };
    case VIEW_COMPLETE_TODOS:
      return {
        ...state,
        showCompleted: true
      };
    default: return state;
  }
}

/*
  state.user = {
    isLoggedin: boolean,
    errorMessage: string
  }
*/
const initialUserState = { isLoggedin: false, errorMessage: "" };
export const user = (state = initialUserState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_LOGGEDIN:
      const { isLoggedin } = payload;
      return {
        ...state,
        // set isLoggedin to false when cookie is undefined
        isLoggedin: !isLoggedin ? false : true
      }
    case SET_LOGIN_ERROR_MESSAGE:
      const { message } = payload;
      return {
        ...state,
        // set isLoggedin to false when cookie is undefined
        errorMessage: message
      }      
    default: return state;
  }
}