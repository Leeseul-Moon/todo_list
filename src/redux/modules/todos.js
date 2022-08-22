// Action value
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const updateTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: ADD_TODO, payload };
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
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todos;
