import { TASK_ADD, TASK_DELETE, TASK_UPDATE, TASK_COMPLETE } from '../Contents/ActionType';

export const addTask = (text) => ({
  type: TASK_ADD,
  payload: text,
});

export const deleteTask = (id) => ({
  type: TASK_DELETE,
  payload: id,
});

export const updateTask = (text, id) => ({
  type: TASK_UPDATE,
  payload: {
    text,
    id,
  },
});

export const completeTask = (id) => ({
  type: TASK_COMPLETE,
  payload: id,
});