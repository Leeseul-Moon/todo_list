// Action value
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_ISDONE = "CHANGE_ISDONE";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const updateTodo = (payload) => {
  return { type: UPDATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const changeIsDone = (payload) => {
  return { type: CHANGE_ISDONE, payload };
};

// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "리액트 강의보기",
      message: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 3123123,
      title: "자스공부",
      message: "문법부터 다시..",
      isDone: false,
    },
    {
      id: 2,
      title: "점심 먹기",
      message: "점심 뭐먹지..?",
      isDone: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    case CHANGE_ISDONE:
      return {
        todos: [
          ...state.todos.filter((todo) => todo.id != action.payload.id),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default todos;
