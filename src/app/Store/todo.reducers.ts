import { createReducer, on } from '@ngrx/store';
import { Todo } from '../Models/todo.model';
import { addTodo, removeTodo, updateTodo } from './todo.actions';

export interface todosState {
  todos: Todo[];
  totalNumber: Number;
}

const initialState: todosState = {
  todos: [],
  totalNumber: 0,
};

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({ ...state, todo })),
  on(removeTodo, (state, { todoId }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id != todoId),
  })),
  on(updateTodo, (state, {updatedTodo}) => ({...state, todos: state.todos.filter(todo => {updatedTodo.id === todo.id})}))
);
