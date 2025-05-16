import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todosState } from './todo.reducers';

export const selectTodoFeat = createFeatureSelector<todosState>('todos');

export const selectAllTodos = createSelector(
  selectTodoFeat,
  (state) => state.todos
);

export const totalTodos = createSelector(
  selectTodoFeat,
  (state) => state.totalNumber
);
