import { createAction, props } from '@ngrx/store';
import { Todo } from '../Models/todo.model';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ updatedTodo: Todo }>()
);
export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ todoId: number }>()
);
