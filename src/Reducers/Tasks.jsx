import { TASK_ADD, TASK_DELETE, TASK_UPDATE, TASK_COMPLETE } from '../Contents/ActionType';

const initialState = JSON.parse(localStorage.getItem('data')) || [];

const tasks = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case TASK_ADD:
      newState = [
        ...state,
        {
          id: state[state.length - 1] ? state[state.length - 1].id + 1 : 0,
          text: action.payload,
          isCompleted: false,
        },
      ];
      return newState;

    case TASK_COMPLETE:
      newState = state.map((todo) => (
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo));
      return newState;

    case TASK_DELETE:
      newState = [...state].filter((todo) => action.payload !== todo.id);
      return newState;

    case TASK_UPDATE:
      newState = state.map((todo) => (
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo));
      return newState;

    default:
      return state;
  }
};

export default tasks;