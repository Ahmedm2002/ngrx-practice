import { createReducer, on } from '@ngrx/store';
import { Todo } from '../Models/todo.model';
import { addTodo, removeTodo, updateTodo } from './todo.actions';

export interface todosState {
  todos: Todo[];
  totalNumber: number;
}

const initialState: todosState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  totalNumber: JSON.parse(localStorage.getItem('todos') || '[]').length,
};



function saveToLocalStorage(todo:Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todo))
}

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    const updatedTodos = [...state.todos, todo];
    saveToLocalStorage(updatedTodos) 
    return {
      ...state,
      todos : updatedTodos,
      totalNumber : updatedTodos.length
    }
 }),
  on(removeTodo, (state, { todoId }) => {
    const updatedTodos = state.todos.filter((todo) => todo.id !== todoId)
    saveToLocalStorage(updatedTodos)
    return {
      ...state,
      todos : updatedTodos,
      totalNumber : updatedTodos.length
    }
  }),

  on(updateTodo, (state, { updatedTodo }) => {
    const updatedTodos = state.todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo)
    saveToLocalStorage(updatedTodos)
    return {
    ...state,
    todos: updatedTodos,
    totalNumber : updatedTodos.length
  }
  })
);
