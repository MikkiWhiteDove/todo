import { TASK_ADD, TASK_DELETE, TASK_UPDATE, TASK_TOGGLE } from '';

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

export const editTask = (id) => ({
  type: TASK_TOGGLE,
  payload: id,
});