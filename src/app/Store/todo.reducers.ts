import { createReducer, on } from '@ngrx/store';
import { Todo } from '../Models/todo.model';
import { addTodo, removeTodo, updateTodo } from './todo.actions';

export interface todosState {
  todos: Todo[];
  totalNumber: number;
}

const initialState: todosState = {
  todos: [],
  totalNumber: 0,
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
    totalNumber: state.totalNumber + 1,
  })),
  on(removeTodo, (state, { todoId }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id != todoId),
    totalNumber: state.todos.length,
  })),

  on(updateTodo, (state, { updatedTodo }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ),
  }))
);
